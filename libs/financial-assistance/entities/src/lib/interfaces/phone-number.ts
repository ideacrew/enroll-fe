/* eslint-disable @typescript-eslint/naming-convention */
export type PhoneNumber = {
  kind: PhoneKind;
  area_code: string;
  number: string; // questionable property name
  primary: boolean;

  country_code?: string;
  extension?: string;
  full_phone_number?: string;
  start_on?: string; // Date
  end_on?: string; // Date
}

export const phoneKind = [
  'home',
  'work',
  'mobile',
  'main',
  'fax',
  'phone',
  'main',
] as const;

export type PhoneKind = (typeof phoneKind)[number];
