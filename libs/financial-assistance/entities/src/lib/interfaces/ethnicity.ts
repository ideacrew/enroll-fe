export const ethnicities = [
  'White',
  'Black or African American',
  'Filipino',
  'Asian Indian',
  'Chinese',
  'Japanese',
  'Korean',
  'Vietnamese',
  'Other Asian',
  'Native Hawaiian',
  'Samoan',
  'Guamanian or Chamorro',
  'Other Pacific Islander',
  'American Indian or Alaska Native',
  'Other',
] as const;

export type NonLatinEthnicityKind = typeof ethnicities[number];

export const latinEthnicities = [
  'Mexican',
  'Mexican American',
  'Chicano/a',
  'Puerto Rican',
  'Cuban',
  'Other',
] as const;

export type LatinEthnicityKind = typeof latinEthnicities[number];

export type EthnicityKind = NonLatinEthnicityKind | LatinEthnicityKind;
