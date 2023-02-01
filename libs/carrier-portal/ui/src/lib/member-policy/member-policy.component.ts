import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Policy } from '@enroll/carrier-portal/types';

import { SortByDatePipe } from '../pipes';

@Component({
  selector: 'enroll-member-policy',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule, DatePipe, CurrencyPipe, SortByDatePipe],
  templateUrl: './member-policy.component.html',
  styleUrls: ['./member-policy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberPolicyComponent {
  @Input() policy!: Policy;
}
