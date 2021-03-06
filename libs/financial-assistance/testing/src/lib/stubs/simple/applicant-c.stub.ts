/* eslint-disable @typescript-eslint/naming-convention */
import { Applicant } from '@enroll/financial-assistance/data-access';
import { faker } from '@faker-js/faker';
import { primaryAddress } from '../address.stub';
import { generateEmail } from '../email.stub';
import { defaultPhones } from '../phone.stub';

export const aishaModellInitial: Applicant = {
  id: faker.datatype.uuid(),
  is_primary_applicant: true,
  first_name: 'Aisha',
  last_name: 'Modell',
  dob: '1988-01-01',
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
