import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewHouseholdMemberService {
  firstName!: string;
  lastName!: string;
  needsCoverage: 'yes' | 'no' = 'yes';
  livesWithPrimary: 'yes' | 'no' = 'no';
  citizenOrNational!: 'yes' | 'no';

  get firstNameHasValue(): boolean {
    return this.firstName?.length > 0;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
