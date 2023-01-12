import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './tax-year.component.html',
  styleUrls: ['./tax-year.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxYearComponent {
  router = inject(Router);

  navigateToHousehold() {
    this.router.navigateByUrl('/premium-tax-credit/household');
  }
}
