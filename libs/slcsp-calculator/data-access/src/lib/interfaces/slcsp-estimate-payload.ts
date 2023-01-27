import { HouseholdMember } from './household-member';

export type SlcspEstimatePayload = {
  householdConfirmation: boolean | undefined;
  householdCount: number;
  taxYear: string;
  state: string;
  members: HouseholdMember[];
};
