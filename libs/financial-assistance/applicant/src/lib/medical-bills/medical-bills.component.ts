import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './medical-bills.component.html',
  styleUrls: ['./medical-bills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicalBillsComponent {
  needHelpPayingBills: boolean | undefined;
}
