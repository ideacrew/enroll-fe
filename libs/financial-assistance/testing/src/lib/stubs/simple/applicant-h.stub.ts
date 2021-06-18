/* eslint-disable @typescript-eslint/naming-convention */
import { datatype } from 'faker';

import { NeedsCoverageApplicant } from '@enroll/financial-assistance/data-access';

import { primaryAddress } from '../address.stub';
import { defaultPhones } from '../phone.stub';
import { generateEmail } from '../email.stub';

export const bettyHurtisInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Betty',
  last_name: 'Hurtis',
  dob: '1998-01-01',
  gender: 'female',
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

export const dwayneHurtisInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Dwayne',
  last_name: 'Hurtis',
  dob: '1998-01-01',
  gender: 'male',
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
