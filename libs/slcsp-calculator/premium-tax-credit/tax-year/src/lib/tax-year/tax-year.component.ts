import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './tax-year.component.html',
  styleUrls: ['./tax-year.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxYearComponent {
  router = inject(Router);
  taxYears = this.determineTaxYears();
  selectedTaxYear = '';

  async navigateToHousehold() {
    if (this.selectedTaxYear && this.selectedTaxYear !== '') {
      await this.router.navigateByUrl(
        `/premium-tax-credit/household/${this.selectedTaxYear}`
      );
    }
  }

  determineTaxYears(): string[] {
    const now = new Date();
    const currentYear = now.getFullYear();
    if (currentYear - 1 <= 2022) {
      return ['2022'];
    }
    let calcYear = currentYear - 1;
    const taxYears = new Array<string>();
    while (calcYear >= 2022) {
      taxYears.push(calcYear.toFixed(0));
      calcYear = calcYear - 1;
    }
    return taxYears;
  }
}
