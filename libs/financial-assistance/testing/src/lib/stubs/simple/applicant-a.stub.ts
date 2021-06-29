/* eslint-disable @typescript-eslint/naming-convention */
import { datatype } from 'faker';

import {
  NeedsCoverageApplicant,
  NoCoverageApplicant,
} from '@enroll/financial-assistance/data-access';

import { primaryAddress } from '../address.stub';
import { defaultPhones } from '../phone.stub';
import { generateEmail } from '../email.stub';
import { employer } from '../employer.stub';

export const dwayneCurtisInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Dwayne',
  last_name: 'Curtis',
  dob: '1947-01-01',
  gender: 'male',
  relationship: 'self',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  citizen_status: 'us_citizen',
  indian_tribe_member: false,
  is_incarcerated: false,
};

export const bettyCurtisInitial: NoCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Betty',
  last_name: 'Curtis',
  dob: '1961-01-01',
  gender: 'female',
  relationship: 'spouse',
  addresses: primaryAddress,
  aasm_state: 'info needed',
  is_applying_coverage: false,
  indian_tribe_member: false,
};

export const dwayneCurtisFinal: NeedsCoverageApplicant = {
  ...dwayneCurtisInitial, // bring in household-level data
  is_required_to_file_taxes: true,
  tax_filer_kind: 'joint',

  // Income Information
  has_job_income: true,
  income: [
    {
      // Critical information, used in determination
      kind: 'wages_and_salaries',
      start_on: '2021-01-01',
      amount: 31176,
      frequency_kind: 'annually',

      // Generic information, not used in determination
      ...employer,
    },
  ],

  // Deductions
  has_deductions: false,

  // MAGI Questions
  is_self_attested_blind: false,
  is_self_attested_disabled: false,
  has_daily_living_help: false,

  // Other Questions
  is_student: false,
  is_pregnant: false,
  is_former_foster_care: false,

  // Health Coverage and Benefits
  has_enrolled_health_coverage: true,
  benefits: [
    {
      kind: 'medicare',
      status: 'is_enrolled',
      start_on: '2021-01-01',
    },
  ],
};

export const bettyCurtisFinal: NoCoverageApplicant = {
  ...bettyCurtisInitial,
  is_required_to_file_taxes: true,
  tax_filer_kind: 'joint',
};
