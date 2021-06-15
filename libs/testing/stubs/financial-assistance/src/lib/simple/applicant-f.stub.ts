/* eslint-disable @typescript-eslint/naming-convention */
import { datatype } from 'faker';

import { Applicant } from '@enroll/financial-assistance/data-access';

import { primaryAddress } from '../address.stub';
import { generateEmail } from '../email.stub';
import { defaultPhones } from '../phone.stub';

export const lailaSimonInitial: Applicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Laila',
  last_name: 'Simon',
  dob: '1981-01-01',
  gender: 'male',
  relationship: 'self',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail('lailasimon'),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  citizen_status: 'us_citizen',
  indian_tribe_member: false,
  is_incarcerated: false,
};

export const williamSimonInitial: Applicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'William',
  last_name: 'Simon',
  dob: '1981-01-01',
  gender: 'male',
  relationship: 'spouse',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail('williamsimon'),
  aasm_state: 'info needed',
  is_applying_coverage: false,
  indian_tribe_member: false,
};

export const finleySimonInitial: Applicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Finley',
  last_name: 'Simon',
  dob: '2003-01-01',
  gender: 'male',
  relationship: 'child',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail('finleysimon'),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
};

export const princetonSimonInitial: Applicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Princeton',
  last_name: 'Simon',
  dob: '2006-01-01',
  gender: 'male',
  relationship: 'child',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail('princetonsimon'),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
};

export const alexzanderSimonInitial: Applicant = {
  id: datatype.uuid(),
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
  emails: generateEmail('alexzandersimon'),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
};
