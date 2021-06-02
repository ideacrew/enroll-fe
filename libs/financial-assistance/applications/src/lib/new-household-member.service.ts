import { Injectable } from '@angular/core';

import { VlpDocumentKind } from '@enroll/financial-assistance/entities';

@Injectable({
  providedIn: 'root',
})
export class NewHouseholdMemberService {
  firstName!: string;
  lastName!: string;
  needsCoverage: 'yes' | 'no' = 'yes';
  livesWithPrimary!: 'yes' | 'no';
  citizenOrNational: 'yes' | 'no' = 'no';
  naturalized!: 'yes' | 'no';
  naturalizedDocument!: string;
  eligibleImmigration: 'yes' | 'no' = 'yes';
  immigrationDocument!: VlpDocumentKind;
  tribalMembership!: 'yes' | 'no';
  tribalId!: string;

  get firstNameHasValue(): boolean {
    return this.firstName?.length > 0;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
