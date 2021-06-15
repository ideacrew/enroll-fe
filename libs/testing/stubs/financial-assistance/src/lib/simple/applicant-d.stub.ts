/* eslint-disable @typescript-eslint/naming-convention */
import { datatype } from 'faker';

import { Applicant } from '@enroll/financial-assistance/data-access';
import { primaryAddress } from '../address.stub';
import { defaultPhones } from '../phone.stub';
import { generateEmail } from '../email.stub';

export const geraldRiversInitial: Applicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Gerald',
  last_name: 'Rivers',
  dob: '1999-01-01',
  gender: 'male',
  relationship: 'self',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail('geraldrivers'),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  citizen_status: 'us_citizen',
  indian_tribe_member: false,
  is_incarcerated: false,
};
