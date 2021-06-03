import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './health-coverage.component.html',
  styleUrls: ['./health-coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HealthCoverageComponent {
  hasEnrolledHealthCoverage: 'yes' | 'no' | undefined;
}
