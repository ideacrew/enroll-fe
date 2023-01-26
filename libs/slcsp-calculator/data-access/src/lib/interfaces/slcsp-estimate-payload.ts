import { AllRelationships, Month } from '@enroll/shared/types';
import { MarketplaceCounty } from './county';

export type SlcspEstimatePayload = {
  householdConfirmation: boolean | undefined;
  householdCount: number;
  taxYear: string;
  state: string;
  members: SlcspHouseholdMembers[];
};

export type SlcspHouseholdMembers = {
  primaryMember: boolean;
  relationship: AllRelationships | null;
  name: string;
  dob: SlcspDateOfBirth;
  residences: SlcspResidences[];
};

export type SlcspDateOfBirth = {
  month: number;
  day: number;
  year: number;
};

export type SlcspResidences = {
  county: SlcspCounty;
  months: SlcspMonths;
};

export type SlcspCounty = MarketplaceCounty;
export type SlcspMonths = Record<Month, boolean>;
