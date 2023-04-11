/* eslint-disable unicorn/no-null */
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, Observable, of, switchMap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import {
  MarketplaceService,
  MarketplaceCounty,
} from '@enroll/slcsp-calculator/data-access';

import { ResidenceFormGroup } from '@enroll/slcsp-calculator/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'enroll-member-residence-zipcode',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './member-residence-zipcode.component.html',
  styleUrls: ['./member-residence-zipcode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberResidenceZipcodeComponent {
  private readonly marketplaceAPI = inject(MarketplaceService);

  zipCodeQuery = new FormControl<string | null>(null);
  selectedCounty!: MarketplaceCounty;

  @Input() currentTaxYear!: string;
  @Input() residenceFormGroup!: FormGroup<ResidenceFormGroup>;
  @Input() memberName!: string;
  @Input() index!: number;

  zipCodeQueryValue$ = this.zipCodeQuery.valueChanges;

  newSearchResults$: Observable<MarketplaceCounty[] | null | string> =
    this.zipCodeQueryValue$.pipe(
      distinctUntilChanged(),
      switchMap((query) => {
        if (query !== null && query.length === 5) {
          return this.marketplaceAPI.searchForZipCode(
            query,
            this.currentTaxYear
          );
        }

        if (query !== null && query.length < 5) {
          return of('No results');
        }

        return of(null);
      })
    );

  get countyStatus(): unknown {
    return this.residenceFormGroup.get('county')?.status;
  }

  selectCounty(county: MarketplaceCounty) {
    this.zipCodeQuery.setValue(
      `${county.zipcode}, ${county.name}, ${county.state}`
    );
    this.residenceFormGroup.get('county')?.setValue(county);
    this.residenceFormGroup.get('absent')?.disable();
  }

  resultsAreCounties(
    result: MarketplaceCounty[] | null | string
  ): result is MarketplaceCounty[] {
    return result !== null && result !== 'No results';
  }

  clearSearch(): void {
    this.zipCodeQuery.setValue(null);
    this.residenceFormGroup.get('county')?.reset();
    this.residenceFormGroup.get('months')?.reset();
    this.residenceFormGroup.get('absent')?.enable();
  }
}
