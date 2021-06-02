import { Injectable } from '@angular/core';

import { VlpDocumentKind } from '@enroll/financial-assistance/entities';

@Injectable({
  providedIn: 'root',
})
export class NewHouseholdMemberService {
  firstName!: string;
  lastName!: string;
  needsCoverage!: 'yes' | 'no';
  livesWithPrimary!: 'yes' | 'no';
  citizenOrNational!: 'yes' | 'no';
  naturalized!: 'yes' | 'no' | undefined;
  naturalizedDocument!: string | undefined;
  eligibleImmigration!: 'yes' | 'no' | undefined;
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
