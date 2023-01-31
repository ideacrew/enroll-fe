import { AllRelationships } from '@enroll/shared/types';
import {
  Coverage,
  DateOfBirth,
  HouseholdMember,
  MarketplaceCounty,
} from '@enroll/slcsp-calculator/data-access';

import { PartialMonths } from './partial-months';

export type HouseholdFormValue = {
  householdConfirmation: boolean | undefined;
  householdCount: number;
  taxYear: string;
  state: string;
  members: HouseholdMember[];
};

export type HouseholdMemberFormValue = {
  primaryMember: boolean;
  relationship: AllRelationships | null;
  name: string;
  dob: DateOfBirth;
  residences: ResidenceFormValue[];
  coverage: Coverage;
};

export type ResidenceFormValue = {
  county: MarketplaceCounty;
  months: PartialMonths;
  absent: boolean;
};
