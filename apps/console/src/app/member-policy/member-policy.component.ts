import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Policy } from '../person-view-data';

@Component({
  selector: 'enroll-member-policy',
  templateUrl: './member-policy.component.html',
  styleUrls: ['./member-policy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberPolicyComponent {
  @Input() policy!: Policy;
}
