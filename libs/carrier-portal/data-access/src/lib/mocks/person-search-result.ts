/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable unicorn/no-null */
import { faker } from '@faker-js/faker';
import {
  MemberSearchResult,
  PersonNamesResult,
  PersonSearchResult,
  PolicySearchResult,
} from '../types';

export const fakePerson = (): PersonNamesResult => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  return {
    name_pfx: faker.name.prefix(),
    name_sfx: faker.name.suffix(),
    middle_name: faker.name.firstName(),
    last_name: lastName,
    first_name: firstName,
    full_name: `${firstName} ${lastName}`,
  };
};

export const fakePolicy = (): PolicySearchResult => {
  const planNameOptions = [
    'Anthem Dental Family Preventive',
    'Anthem Silver X Clear Choice Tiered 5500 S04',
    'Anthem Bronze X Clear Choice Tiered 5900 w HSA',
    'Anthem Bronze X Tiered 7800',
  ];

  const randomPlan =
    planNameOptions[Math.floor(Math.random() * planNameOptions.length)];

  return {
    enrollee_count: faker.datatype.number({ min: 1, max: 5 }),
    plan: {
      name: randomPlan,
      hios_plan_id: faker.random.alphaNumeric(14),
    },
    id: faker.random.numeric(5),
  };
};

export const fakeMember = (): MemberSearchResult => ({
  hbx_member_id: faker.random.alphaNumeric(7),
  ssn: faker.random.numeric(9),
  dob: faker.date
    .birthdate({ min: 18, max: 85, mode: 'age' })
    .toISOString()
    .slice(0, 10),
  id: faker.random.numeric(5),
  gender: faker.helpers.arrayElement(['male', 'female']),
  policies: [fakePolicy(), fakePolicy(), fakePolicy()],
});

export const fakePersonResult = (): PersonSearchResult => {
  const id = faker.random.alphaNumeric(25);
  const person_name = fakePerson();
  const members = [fakeMember()];

  return {
    id,
    person_name,
    members,
  };
};

/* eslint-disable @typescript-eslint/naming-convention */
export const personSearchResults: PersonSearchResult[] = [
  fakePersonResult(),
  fakePersonResult(),
  fakePersonResult(),
  fakePersonResult(),
  fakePersonResult(),
  fakePersonResult(),
  fakePersonResult(),
  fakePersonResult(),
  fakePersonResult(),
  fakePersonResult(),
  fakePersonResult(),
  fakePersonResult(),
];
