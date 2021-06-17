/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
import { Injectable, Inject } from '@angular/core';
import { Router, NavigationEnd, RouterEvent, Event } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

import { removeAuthToken } from './removeAuthToken';
import { TRACKING_ID } from './trackingId';

declare var gtag: any;

@Injectable()
export class AnalyticsService {
  constructor(
    @Inject(TRACKING_ID) private trackingId: string,
    private router: Router
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
        tap((event: NavigationEnd) => this.sendPage(event.urlAfterRedirects))
      )
      .subscribe();
  }

  // Sets the userId for tracking
  // https://developers.google.com/analytics/devguides/collection/gtagjs/cookies-user-id#set_user_id
  setUserId(userId: string): void {
    gtag('config', this.trackingId, {
      user_id: userId,
    });

    // need config and set
    // https://www.en.advertisercommunity.com/t5/Google-Analytics-Code/User-ID-Reports-View-not-showing-any-data/td-p/1574868
    gtag('set', { user_id: userId });
  }

  sendPage(path: string): void {
    if (this.trackingId.length > 0) {
      gtag('config', this.trackingId, {
        page_path: removeAuthToken(path),
      });
    }
  }
}
