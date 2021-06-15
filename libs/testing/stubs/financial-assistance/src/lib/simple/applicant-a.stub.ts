/* eslint-disable @typescript-eslint/naming-convention */
import { datatype } from 'faker';

import { Applicant } from '@enroll/financial-assistance/data-access';

import { primaryAddress } from '../address.stub';
import { defaultPhones } from '../phone.stub';
import { generateEmail } from '../email.stub';

export const dwayneCurtisInitial: Applicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Dwayne',
  last_name: 'Curtis',
  dob: '1947-01-01',
  gender: 'male',
  relationship: 'self',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail('dwaynecurtis'),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  citizen_status: 'us_citizen',
  indian_tribe_member: false,
  is_incarcerated: false,
};

export const bettyCurtisInitial: Applicant = {
  id: datatype.uuid(),
  is_primary_applicant: false,
  first_name: 'Betty',
  last_name: 'Curtis',
  dob: '1961-01-01',
  gender: 'female',
  relationship: 'spouse',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail('bettycurtis'),
  aasm_state: 'info needed',
  is_applying_coverage: false,
  indian_tribe_member: false,
};
