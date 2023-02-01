import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'enroll-carrier-portal-member-coverage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrier-portal-member-coverage.component.html',
  styleUrls: ['./carrier-portal-member-coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrierPortalMemberCoverageComponent {}
