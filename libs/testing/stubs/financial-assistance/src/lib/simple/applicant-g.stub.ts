/* eslint-disable @typescript-eslint/naming-convention */
import { datatype } from 'faker';

import { NeedsCoverageApplicant } from '@enroll/financial-assistance/data-access';

import { primaryAddress } from '../address.stub';
import { generateEmail } from '../email.stub';
import { defaultPhones } from '../phone.stub';

export const sorenSharpInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Soren',
  middle_name: 'M',
  last_name: 'Sharp',
  dob: '1988-01-01',
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

export const miaSharpInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Mia',
  last_name: 'Sharp',
  dob: '1988-01-01',
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

export const christianSharpInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Christian',
  middle_name: 'Matthew',
  last_name: 'Sharp',
  dob: '2010-01-01',
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

export const monikaSharpInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Monika',
  middle_name: 'Leila',
  last_name: 'Sharp',
  dob: '2013-01-01',
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
