import {
  CurrencyPipe,
  DatePipe,
  NgFor,
  NgIf,
  TitleCasePipe,
} from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { Policy } from '@enroll/carrier-portal/types';

import { SortByDatePipe } from '../pipes';

@Component({
  selector: 'enroll-member-policy',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterModule,
    DatePipe,
    CurrencyPipe,
    SortByDatePipe,
    TranslocoModule,
    TitleCasePipe,
  ],
  templateUrl: './member-policy.component.html',
  styleUrls: ['./member-policy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberPolicyComponent {
  @Input() policy!: Policy;
  currentYear = new Date().getFullYear().toString();
}
