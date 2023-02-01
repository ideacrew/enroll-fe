import { Component, inject } from '@angular/core';
import { AnalyticsService } from '@enroll/shared/analytics';

@Component({
  selector: 'enroll-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ga = inject(AnalyticsService);
}
