import { EmployerInfo } from '@enroll/financial-assistance/data-access';

/* eslint-disable @typescript-eslint/naming-convention */
export const employer: EmployerInfo = {
  employer_name: 'Acme Pizza',
  employer_address: {
    kind: 'work',
    address_1: '123 Main Street',
    city: 'Bangor',
    state: 'ME',
    zip: '04401',
  },
  employer_phone: {
    kind: 'work',
    full_phone_number: '8882121234',
  },
};
