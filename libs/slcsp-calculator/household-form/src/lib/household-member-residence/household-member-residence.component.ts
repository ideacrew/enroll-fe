import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

import {
  MarketplaceCounty,
  MarketplaceService,
} from '@enroll/slcsp-calculator/data-access';

import {
  HouseholdMemberFormGroup,
  ResidenceFormGroup,
} from '../interfaces/form-types';

@Component({
  selector: 'enroll-household-member-residence',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './household-member-residence.component.html',
  styleUrls: ['./household-member-residence.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdMemberResidencesComponent {
  private readonly marketplaceAPI = inject(MarketplaceService);
  private readonly searchResults = new Subject<MarketplaceCounty | undefined>();
  searchResults$ = this.searchResults.asObservable();

  @Input() parent!: FormGroup<HouseholdMemberFormGroup>;

  get residences() {
    return this.parent.get('residences') as FormArray<
      FormGroup<ResidenceFormGroup>
    >;
  }

  searchForZipCode(index: number) {
    const zipCode = this.residences.controls[index].get('zipCode')?.value;

    if (zipCode && zipCode.length === 5) {
      this.marketplaceAPI.searchForZipCode(zipCode).subscribe({
        next: (county) => {
          this.searchResults.next(county);
        },
      });
    }
  }

  setResultAsZipcode(county: MarketplaceCounty, index: number): void {
    // eslint-disable-next-line unicorn/no-useless-undefined
    this.searchResults.next(undefined);
    // Set the value of the county to the zipcode formControl
    this.residences.controls[index].get('zipCode')?.setValue(county.zipcode);
  }
}
