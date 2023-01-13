/* eslint-disable @typescript-eslint/naming-convention */
export type CitizenImmigrationStatusInformation = {
  citizen_status: CitizenKind;
  is_resident_post_092296: boolean;
  is_lawful_presence_self_attested: boolean;
}

export const citizenKinds = [
  'us_citizen',
  'naturalized_citizen',
  'alien_lawfully_present',
  'lawful_permanent_resident',
  'undocumented_immigrant',
  'not_lawfully_present_in_us',
  'non_native_not_lawfully_present_in_us',
  'ssn_pass_citizenship_fails_with_SSA',
  'non_native_citizen',
] as const;

export type CitizenKind = (typeof citizenKinds)[number];
