import { AllRelationships } from '@enroll/shared/types';
import { Coverage } from './coverage';
import { DateOfBirth } from './dob';
import { Residence } from './residence';

export type HouseholdMember = {
  primaryMember: boolean;
  relationship: AllRelationships | null;
  name: string;
  dob: DateOfBirth;
  residences: Residence[];
  coverage: Coverage;
};
