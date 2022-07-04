import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './tax-dependent.component.html',
  styleUrls: ['./tax-dependent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxDependentComponent {
  canBeClaimed: 'yes' | 'no' | undefined;
}
