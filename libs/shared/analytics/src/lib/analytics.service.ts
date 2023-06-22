/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, isDevMode } from '@angular/core';
import { Router, NavigationEnd, RouterEvent, Event } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
declare const gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private router: Router) {
    if (!isDevMode()) {
      this.router.events
        .pipe(
          filter<Event, RouterEvent>(
            (event: Event): event is RouterEvent => event instanceof RouterEvent
          ),
          filter<RouterEvent, NavigationEnd>(
            (event: RouterEvent): event is NavigationEnd =>
              event instanceof NavigationEnd
          ),
          tap((event: NavigationEnd) =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            gtag('event', 'page_view', { page_path: event.urlAfterRedirects })
          )
        )
        .subscribe();
    }
  }
}
