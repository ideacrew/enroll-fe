import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './other-income-sources.component.html',
  styleUrls: ['./other-income-sources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherIncomeSourcesComponent {
  hasOtherIncome: 'yes' | 'no' | undefined;
}
