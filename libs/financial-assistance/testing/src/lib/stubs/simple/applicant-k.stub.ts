/* eslint-disable @typescript-eslint/naming-convention */
import { datatype } from 'faker';

import { NeedsCoverageApplicant } from '@enroll/financial-assistance/data-access';

import { primaryAddress } from '../address.stub';
import { defaultPhones } from '../phone.stub';
import { generateEmail } from '../email.stub';

export const sarahNoelflInitial: NeedsCoverageApplicant = {
  id: datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Sarah',
  last_name: 'Noelfl',
  dob: '2000-01-01',
  gender: 'female',
  relationship: 'self',
  addresses: primaryAddress,
  phones: defaultPhones,
  emails: generateEmail(),
  aasm_state: 'info needed',
  is_applying_coverage: true,
  indian_tribe_member: false,
  is_incarcerated: false,
  citizen_status: 'alien_lawfully_present',
  vlp_document: {
    subject: 'I-766 (Employment Authorization Card)',
    alien_number: '123456789',
    card_number: 'abc1234567890',
    expiration_date: '2024-01-01',
  },
};
