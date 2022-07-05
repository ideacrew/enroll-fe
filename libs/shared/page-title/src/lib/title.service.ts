import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  Router,
  NavigationEnd,
  RouterEvent,
  Event,
  ActivatedRoute,
  Data,
} from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';

import { filterNullish } from '@enroll/util/helpers';

import { TITLE_EXTENSION } from './title-extension.token';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(
    @Inject(TITLE_EXTENSION) private extension: string,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleSvc: Title
  ) {
    this.router.events
      .pipe(
        filter<Event, RouterEvent>(
          (event: Event): event is RouterEvent => event instanceof RouterEvent
        ),
        filter<RouterEvent, NavigationEnd>(
          (event: RouterEvent): event is NavigationEnd =>
            event instanceof NavigationEnd
        ),
        map(() => this.activatedRoute),
        // https://stackoverflow.com/questions/49308304/get-custom-route-data-from-lazy-loaded-route-in-top-level-component
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
        filterNullish<Data>(),
        filter<Data>((data) => data['title']),
        tap((data) => this.setTitle(data['title']))
      )
      .subscribe();
  }

  setTitle(newTitle: string) {
    this.titleSvc.setTitle(`${newTitle} | ${this.extension}`);
  }
}
