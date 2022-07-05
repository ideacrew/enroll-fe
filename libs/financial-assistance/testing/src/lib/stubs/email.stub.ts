import { faker } from '@faker-js/faker';

import { Email } from '@enroll/financial-assistance/entities';

export const defaultEmail: Email[] = [
  {
    kind: 'home',
    address: 'dwaynecurtis@example.com',
  },
];

export const generateEmail = (): Email[] => [
  {
    kind: 'home',
    address: faker.internet.email(),
  },
];
