/* eslint-disable unicorn/no-null */
import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  ethnicities,
  latinEthnicities,
} from '@enroll/financial-assistance/entities';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  templateUrl: './race-and-ethnicity.component.html',
  styleUrls: ['./race-and-ethnicity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaceAndEthnicityComponent implements OnInit, OnDestroy {
  // TODO: Split this into two components
  ethnicities = ethnicities;
  latinEthnicities = latinEthnicities;
  ethnicitiesSubscription!: Subscription;
  latinEthnicitiesSubscription!: Subscription;
  form: FormGroup;
  editingExistingMember: boolean;

  constructor(public householdMemberService: HouseholdMemberService) {
    this.form = this.householdMemberService.householdMemberForm;
    this.editingExistingMember =
      this.householdMemberService.editingExistingMember;
  }

  ngOnInit() {
    // cf. https://stackoverflow.com/a/58261847/664747
    const optionalGroup = this.form.get('optionalInformation') as FormGroup;
    const ethnicitiesArray = optionalGroup.controls['ethnicities'] as FormArray;
    const latinEthnicitiesArray = optionalGroup.controls[
      'latinEthnicities'
    ] as FormArray;

    this.ethnicitiesSubscription = ethnicitiesArray.valueChanges
      .pipe(
        tap(() => {
          ethnicitiesArray.setValue(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            ethnicitiesArray.value.map((value: string, index: number) =>
              value ? this.ethnicities[index] : null
            ),
            {
              emitEvent: false,
            }
          );
        })
      )
      .subscribe();

    this.latinEthnicitiesSubscription = latinEthnicitiesArray.valueChanges
      .pipe(
        tap(() => {
          latinEthnicitiesArray.setValue(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            latinEthnicitiesArray.value.map((value: string, index: number) =>
              value ? this.latinEthnicities[index] : null
            ),
            {
              emitEvent: false,
            }
          );
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.ethnicitiesSubscription.unsubscribe();
    this.latinEthnicitiesSubscription.unsubscribe();
  }
}
