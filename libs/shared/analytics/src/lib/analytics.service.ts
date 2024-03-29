/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
import { Injectable, isDevMode } from '@angular/core';
import { Router, NavigationEnd, RouterEvent, Event } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
declare var gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private router: Router) {
    if (!isDevMode()) {
      this.router.events
        .pipe(
          filter(
            (event_: Event | RouterEvent): event_ is RouterEvent =>
              event_ instanceof RouterEvent
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
