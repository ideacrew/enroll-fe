import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  taxInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taxInfoForm = this.fb.group({
      // eslint-disable-next-line @typescript-eslint/unbound-method
      filingTaxes: [null, Validators.required],
      filingJointly: null,
      claimedAsDependent: null,
      claimedBy: null,
    });
  }
}
