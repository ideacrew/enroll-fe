import { Injectable, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HouseholdService {
  fb = inject(FormBuilder);
  householdForm!: FormGroup;
  membersArray!: FormArray;

  constructor() {
    this.householdForm = this.fb.group({
      numMembers: this.fb.control(1),
      members: this.fb.array([this.createMember()]),
    });

    this.membersArray = this.householdForm.get('members') as FormArray;
  }

  createMember(): FormGroup {
    return this.fb.group({
      name: this.fb.group(''),
      dob: this.fb.group({
        month: this.fb.group(''),
        day: this.fb.group(''),
        year: this.fb.group(''),
      }),
      placesLived: this.fb.group(''),

      marketPlaceCoverage: this.fb.group(''),
    });
  }

  updateMembers() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const numberMembers = this.householdForm.get('numMembers')?.value;
    const currentMembers = this.membersArray.length;
    if (numberMembers > currentMembers) {
      for (let index = currentMembers; index < numberMembers; index++) {
        this.membersArray.push(this.createMember());
      }
    } else if (numberMembers < currentMembers) {
      for (let index = currentMembers; index > numberMembers; index--) {
        this.membersArray.removeAt(index - 1);
      }
    }
  }
}
