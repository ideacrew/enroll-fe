import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './employer-income.component.html',
  styleUrls: ['./employer-income.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployerIncomeComponent {
  hasEmployerIncome: 'yes' | 'no' | undefined;
}
