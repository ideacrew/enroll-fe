/* eslint-disable @typescript-eslint/naming-convention */
import { datatype } from 'faker';

import { NeedsCoverageApplicant } from '@enroll/financial-assistance/data-access';

import { primaryAddress } from '../address.stub';
import { generateEmail } from '../email.stub';
import { defaultPhones } from '../phone.stub';

export const claytonMorganInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Clayton',
  last_name: 'Morgan',
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

export const albaMorganInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Alba',
  last_name: 'Morgan',
  dob: '1981-01-01',
  gender: 'female',
  relationship: 'spouse',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
  citizen_status: 'us_citizen',
  is_incarcerated: false,
};

export const ayvaMorganInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Ayva',
  last_name: 'Morgan',
  dob: '2013-01-01',
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

export const safiyahMorganInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Safiyah',
  middle_name: 'Nina',
  last_name: 'Morgan',
  dob: '2011-01-01',
  gender: 'female',
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

export const daphneMorganInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Daphne',
  last_name: 'Morgan',
  dob: '2009-01-01',
  gender: 'female',
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

export const hareemMorganInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Hareem',
  middle_name: 'Christina',
  last_name: 'Morgan',
  dob: '2007-01-01',
  gender: 'female',
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
export const theodoreMorganInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Theodore',
  middle_name: 'Clarence',
  last_name: 'Morgan',
  dob: '2005-01-01',
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
export const michaelMorganInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Michael',
  last_name: 'Morgan',
  dob: '2005-01-01',
  gender: 'female',
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
export const hughMorganInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Hugh',
  last_name: 'Morgan',
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