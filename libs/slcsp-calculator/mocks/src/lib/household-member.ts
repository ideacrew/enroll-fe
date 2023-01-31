import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';

export const householdMember1: HouseholdMember = {
  primaryMember: true,
  relationship: 'self',
  name: 'John',
  dob: {
    month: '1',
    day: '1',
    year: '1979',
  },
  residences: [
    {
      county: {
        zipcode: '04003',
        name: 'Cumberland County',
        fips: '23005',
        state: 'ME',
      },
      months: {
        jan: true,
        feb: true,
        mar: true,
        apr: true,
        may: true,
        jun: true,
        jul: true,
        aug: true,
        sep: true,
        oct: true,
        nov: true,
        dec: true,
      },
    },
  ],
  coverage: {
    jan: false,
    feb: false,
    mar: false,
    apr: false,
    may: false,
    jun: false,
    jul: false,
    aug: false,
    sep: false,
    oct: false,
    nov: false,
    dec: false,
  },
};

export const householdMember2: HouseholdMember = {
  primaryMember: false,
  relationship: 'spouse',
  name: 'Francine',
  dob: {
    month: '1',
    day: '1',
    year: '1979',
  },
  residences: [
    {
      county: {
        zipcode: '04003',
        name: 'Cumberland County',
        fips: '23005',
        state: 'ME',
      },
      months: {
        jan: true,
        feb: true,
        mar: true,
        apr: true,
        may: true,
        jun: true,
        jul: true,
        aug: true,
        sep: true,
        oct: true,
        nov: true,
        dec: true,
      },
    },
  ],
  coverage: {
    jan: false,
    feb: false,
    mar: false,
    apr: false,
    may: false,
    jun: false,
    jul: false,
    aug: false,
    sep: false,
    oct: false,
    nov: false,
    dec: false,
  },
};
