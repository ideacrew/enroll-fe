/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { VlpDocumentKind } from '@enroll/financial-assistance/entities';
import { ApplicantsEntity } from '@enroll/financial-assistance/store/applicants';
import { applicantToForm } from './applicantToForm';

@Injectable()
export class HouseholdMemberService {
  firstName!: string;
  lastName!: string;
  is_applying_coverage!: 'yes' | 'no';
  livesWithPrimary!: 'yes' | 'no';
  citizenOrNational!: 'yes' | 'no';
  naturalized!: 'yes' | 'no' | undefined;
  naturalizedDocument!: string | undefined;
  eligibleImmigration!: 'yes' | 'no' | undefined;
  immigrationDocument!: VlpDocumentKind;
  tribalMembership!: 'yes' | 'no';
  tribalId!: string;
  tribalHealth!: 'yes' | 'no' | undefined;

  householdMemberForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.householdMemberForm = this.fb.group({
      // Do we need this property on the form?
      // is_primary_applicant: [null, Validators.required],
      is_applying_coverage: [null, Validators.required],
      personalInformation: this.fb.group({
        first_name: ['', Validators.required],
        middle_name: '',
        last_name: ['', Validators.required],
        name_sfx: '',
        dob: ['', Validators.required],
        ssnInformation: this.fb.group(
          {
            ssn: '',
            no_ssn: false,
          },
          {
            validators: [hasSSNValidator],
          } as AbstractControlOptions
        ),
        gender: ['', Validators.required],
        relationship: ['', Validators.required],
      }),
      livingSituation: ['', Validators.required],
      additionalInformation: this.fb.group({}),
    });

    // this.needsCoverage$ = this.householdMemberForm
    //   .get('is_applying_coverage')
    //   ?.valueChanges.pipe(tap(console.log));
  }

  get firstNameHasValue(): boolean {
    return this.firstName?.length > 0;
  }

  get fullName(): string {
    const firstName: string = this.householdMemberForm.get(
      'personalInformation.first_name'
    )?.value;
    const lastName: string = this.householdMemberForm.get(
      'personalInformation.last_name'
    )?.value;

    console.log({ firstName, lastName });

    return firstName && lastName ? `${firstName} ${lastName}` : 'this person';
  }

  insertApplicant(applicant: ApplicantsEntity): void {
    const applicantForm = applicantToForm(applicant);

    this.householdMemberForm.patchValue(applicantForm);
  }
}

function hasSSNValidator(control: FormGroup): ValidationErrors | null {
  const noSSN = control.get('no_ssn');

  if (noSSN?.value === false) {
    return Validators.required(control.get('ssn') as FormControl)
      ? {
          ssnRequired: true,
        }
      : null;
  }

  return null;
}
