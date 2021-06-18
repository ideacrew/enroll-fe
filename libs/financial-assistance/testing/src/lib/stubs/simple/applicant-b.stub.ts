/* eslint-disable @typescript-eslint/naming-convention */
import { datatype } from 'faker';

import { Applicant } from '@enroll/financial-assistance/data-access';

import { primaryAddress } from '../address.stub';
import { generateEmail } from '../email.stub';
import { defaultPhones } from '../phone.stub';

export const michaelEwingInitial: Applicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Michael',
  last_name: 'Ewing',
  dob: '1988-01-01',
  gender: 'male',
  relationship: 'self',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  is_applying_coverage: false,
  indian_tribe_member: false,
};
