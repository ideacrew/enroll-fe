// eslint-disable-next-line unicorn/prevent-abbreviations
import { faker } from '@faker-js/faker';

import {
  NeedsCoverageApplicant,
  NoCoverageApplicant,
} from '@enroll/financial-assistance/data-access';

import { primaryAddress } from '../address.stub';
import { generateEmail } from '../email.stub';
import { defaultPhones } from '../phone.stub';

export const lailaSimonInitial: NeedsCoverageApplicant = {
  id: faker.datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Laila',
  last_name: 'Simon',
  dob: '1981-01-01',
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

export const williamSimonInitial: NoCoverageApplicant = {
  id: faker.datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'William',
  last_name: 'Simon',
  dob: '1981-01-01',
  gender: 'male',
  relationship: 'spouse',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  is_applying_coverage: false,
  indian_tribe_member: false,
};

export const finleySimonInitial: NeedsCoverageApplicant = {
  id: faker.datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Finley',
  last_name: 'Simon',
  dob: '2003-01-01',
  gender: 'male',
  relationship: 'child',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
  citizen_status: 'us_citizen',
  is_incarcerated: false,
};

export const princetonSimonInitial: NeedsCoverageApplicant = {
  id: faker.datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Princeton',
  last_name: 'Simon',
  dob: '2006-01-01',
  gender: 'male',
  relationship: 'child',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  indian_tribe_member: false,
  is_applying_coverage: true,
  citizen_status: 'us_citizen',
  is_incarcerated: false,
};

export const alexzanderSimonInitial: NeedsCoverageApplicant = {
  id: faker.datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Alexzander',
  middle_name: 'Carl',
  last_name: 'Simon',
  name_sfx: 'IV',
  dob: '2008-01-01',
  gender: 'male',
  relationship: 'child',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
  citizen_status: 'us_citizen',
  is_incarcerated: false,
};
