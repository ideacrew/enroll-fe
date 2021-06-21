/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { NewHouseholdMemberService } from '../new-household-member.service';

@Component({
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInformationComponent {
  basicInfoFormGroup: FormGroup;

  constructor(
    public newHouseholdMember: NewHouseholdMemberService,
    private fb: FormBuilder
  ) {
    this.basicInfoFormGroup = this.fb.group({
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
        { validators: [hasSSNValidator] }
      ),
      gender: ['', Validators.required],
      relationship: ['', Validators.required],
    });
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
