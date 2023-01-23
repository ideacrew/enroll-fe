import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
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
export class MemberResidenceZipcodeComponent implements OnInit, OnDestroy {
  private readonly marketplaceAPI = inject(MarketplaceService);
  private readonly searchResults = new Subject<MarketplaceCounty | undefined>();
  searchResults$ = this.searchResults.asObservable();

  querySubscription!: Subscription;

  // Zipcode search field
  // private readonly zipCodeSubscription =
  zipCodeQuery = new FormControl<string>('', { nonNullable: true });

  @Input() residenceFormGroup!: FormGroup<ResidenceFormGroup>;
  @Input() memberName!: string;

  ngOnInit(): void {
    this.querySubscription = this.zipCodeQuery.valueChanges.subscribe({
      next: (zipCode) => {
        if (zipCode && zipCode.length === 5) {
          this.searchForZipCode(zipCode);
        }
      },
    });
  }

  searchForZipCode(zipCode: string) {
    this.marketplaceAPI.searchForZipCode(zipCode).subscribe({
      next: (county) => {
        this.searchResults.next(county);
      },
    });
  }

  setResultAsZipcode(county: MarketplaceCounty): void {
    // eslint-disable-next-line unicorn/no-useless-undefined
    this.searchResults.next(undefined);
    // Set the value of the county to the county formGroup
    this.residenceFormGroup.get('county')?.setValue(county);
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
