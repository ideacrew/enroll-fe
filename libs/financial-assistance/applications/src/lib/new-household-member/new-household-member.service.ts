import { Injectable } from '@angular/core';

import { VlpDocumentKind } from '@enroll/financial-assistance/entities';

@Injectable()
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
  tribalHealth!: 'yes' | 'no' | undefined;

  get firstNameHasValue(): boolean {
    return this.firstName?.length > 0;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
