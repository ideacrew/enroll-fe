import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';
import {
  mockPrimaryHouseholdMember,
  mockSecondaryHouseholdMember,
} from './household-member.mock';

export const mockHousehold = (): HouseholdMember[] => {
  const primaryMember = mockPrimaryHouseholdMember();
  const secondaryMember = mockSecondaryHouseholdMember();

  return [primaryMember, secondaryMember];
};
