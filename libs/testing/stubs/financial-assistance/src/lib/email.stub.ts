import { Email } from '@enroll/financial-assistance/entities';

export const defaultEmail: Email[] = [
  {
    kind: 'home',
    address: 'dwaynecurtis@example.com',
  },
];

export const generateEmail = (fullName: string): Email[] => [
  {
    kind: 'home',
    address: `${fullName}@example.com`,
  },
];
