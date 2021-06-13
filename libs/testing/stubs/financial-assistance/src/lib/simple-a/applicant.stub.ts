/* eslint-disable @typescript-eslint/naming-convention */
import { Applicant } from '@enroll/financial-assistance/data-access';

const dwayneCurtisInitial: Applicant = {
  id: 'abc1234',
  is_primary_applicant: true,
  first_name: 'Dwayne',
  last_name: 'Curtis',
  dob: '1947-01-01',
  gender: 'male',
  relationship: 'self',
  addresses: [
    {
      street1: '123 Main Street',
      city: 'Anytown',
      state: 'ME',
      zipcode: '06432',
    },
  ],
  phones: [
    {
      kind: 'home',
      primary: true,
      area_code: '546',
      number: '5658798',
    },
  ],
  emails: [
    {
      kind: 'home',
      address: 'dwaynecurtis@example.com',
    },
  ],
  aasm_state: 'info needed',
  is_applying_coverage: true,
  citizen_status: 'us_citizen',
  indian_tribe_member: false,
  is_self_attested_blind: false,
  is_self_attested_disabled: false,
  has_daily_living_help: false,
  is_incarcerated: false,
  is_pregnant: false,
  is_required_to_file_taxes: false,
  has_job_income: true,
  has_self_employment_income: false,
  has_other_income: false,
  has_unemployment_income: false,
  has_deductions: false,
  has_enrolled_health_coverage: false,
  has_eligible_health_coverage: false,
};

const bettyCurtisInitial: Applicant = {
  id: 'abc1235',
  is_primary_applicant: false,
  first_name: 'Betty',
  last_name: 'Curtis',
  dob: '1961-01-01',
  gender: 'female',
  relationship: 'spouse',
  addresses: dwayneCurtisInitial.addresses, // lives with Dwayne
  phones: [
    {
      kind: 'home',
      primary: true,
      area_code: '546',
      number: '5658798',
    },
  ],
  emails: [
    {
      kind: 'home',
      address: 'bettycurtis@example.com',
    },
  ],
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
  is_pregnant: false,
  is_required_to_file_taxes: false,
  has_job_income: false,
  has_self_employment_income: false,
  has_other_income: false,
  has_unemployment_income: false,
  has_deductions: false,
  has_enrolled_health_coverage: false,
  has_eligible_health_coverage: false,
};

export const initialApplicantsSimpleA: Applicant[] = [dwayneCurtisInitial];

export const addedHouseholdApplicantsSimpleA: Applicant[] = [
  dwayneCurtisInitial,
  bettyCurtisInitial,
];

export const addedCoverageForCurtisSimpleA: Applicant[] = [
  {
    ...dwayneCurtisInitial,

    benefits: [
      {
        kind: 'medicare',
        status: 'is_enrolled',
        start_on: '2021-01-01',
      },
    ],
  },
  bettyCurtisInitial,
];
