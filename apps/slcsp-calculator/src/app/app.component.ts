import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticsService } from '@enroll/shared/analytics';
import { FooterComponent, HeaderComponent } from '@enroll/ui/base/shell';

@Component({
  selector: 'enroll-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ga = inject(AnalyticsService);
}
