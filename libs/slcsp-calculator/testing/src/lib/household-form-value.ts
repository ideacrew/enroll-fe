import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';
import { HouseholdFormValue } from '@enroll/slcsp-calculator/household-form';

export const createFinalFormValue = (
  householdMembers: HouseholdMember[]
): HouseholdFormValue => ({
  householdCount: householdMembers.length,
  householdConfirmation: true,
  taxYear: '2022',
  state: 'ME',
  members: householdMembers,
});
