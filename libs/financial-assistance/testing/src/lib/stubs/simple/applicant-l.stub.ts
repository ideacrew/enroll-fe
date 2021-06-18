/* eslint-disable @typescript-eslint/naming-convention */
import { datatype } from 'faker';

import { NeedsCoverageApplicant } from '@enroll/financial-assistance/data-access';

import { primaryAddress } from '../address.stub';
import { defaultPhones } from '../phone.stub';
import { generateEmail } from '../email.stub';

export const martinHartmanInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Martin',
  last_name: 'Hartman',
  dob: '1941-01-01',
  gender: 'male',
  relationship: 'self',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
  is_incarcerated: false,
  citizen_status: 'us_citizen',
};

export const helenHartman: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Helen',
  last_name: 'Hartman',
  dob: '1997-01-01',
  gender: 'female',
  relationship: 'child',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
  is_incarcerated: false,
  citizen_status: 'us_citizen',
};

export const robertHartman: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Robert',
  last_name: 'Hartman',
  dob: '2011-01-01',
  gender: 'male',
  relationship: 'child',
  encrypted_ssn: '555-55-5555',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
  is_incarcerated: false,
  citizen_status: 'us_citizen',
};
