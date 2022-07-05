/* eslint-disable unicorn/no-null */
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  taxInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taxInfoForm = this.fb.group({
      filingTaxes: [null, Validators.required],
      filingJointly: null,
      claimedAsDependent: null,
      claimedBy: null,
    });
  }
}
