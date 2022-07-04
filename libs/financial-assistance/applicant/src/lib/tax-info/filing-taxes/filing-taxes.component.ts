import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './filing-taxes.component.html',
  styleUrls: ['./filing-taxes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilingTaxesComponent {
  willFileTaxes: 'yes' | 'no' | undefined;
}
