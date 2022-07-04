import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'enroll-potential-coverage',
  templateUrl: './potential-coverage.component.html',
  styleUrls: ['./potential-coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PotentialCoverageComponent {
  hasEligibleHealthCoverage: 'yes' | 'no' | undefined;
}
