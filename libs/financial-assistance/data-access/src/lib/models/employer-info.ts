/* eslint-disable @typescript-eslint/naming-convention */
export interface EmployerInfo {
  employer_name: string;
  employer_address: {
    kind: string;
    address_1: string;
    address_2?: string;
    city: string;
    state: string;
    zip: string;
  };
  employer_phone: {
    kind: string;
    full_phone_number: string;
  };
}
