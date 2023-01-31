import { AllRelationships } from '@enroll/shared/types';

import { Coverage } from './coverage';
import { DateOfBirth } from './dob';
import { SlcspResidence } from './residence';

export type HouseholdMember = {
  primaryMember: boolean;
  relationship: AllRelationships;
  name: string;
  dob: DateOfBirth;
  residences: SlcspResidence[];
  coverage: Coverage;
};
