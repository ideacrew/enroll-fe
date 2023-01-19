import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import {
  MarketplaceService,
  MarketplaceCounty,
} from '@enroll/slcsp-calculator/data-access';

import { ResidenceFormGroup } from '../interfaces/form-types';

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
  private readonly searchResults = new Subject<MarketplaceCounty | undefined>();
  searchResults$ = this.searchResults.asObservable();

  @Input() residenceFormGroup!: FormGroup<ResidenceFormGroup>;

  searchForZipCode() {
    const zipCode = this.residenceFormGroup.get('zipCode')?.value;

    if (zipCode && zipCode.length === 5) {
      this.marketplaceAPI.searchForZipCode(zipCode).subscribe({
        next: (county) => {
          this.searchResults.next(county);
        },
      });
    }
  }

  setResultAsZipcode(county: MarketplaceCounty): void {
    // eslint-disable-next-line unicorn/no-useless-undefined
    this.searchResults.next(undefined);
    // Set the value of the county to the zipcode formControl
    this.residenceFormGroup.get('zipCode')?.setValue(county.zipcode);
  }
}
