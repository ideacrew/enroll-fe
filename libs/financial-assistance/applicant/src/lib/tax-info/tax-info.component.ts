import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './tax-info.component.html',
  styleUrls: ['./tax-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxInfoComponent {
  canBeClaimed!: 'yes' | 'no';
}
