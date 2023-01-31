import { faker } from '@faker-js/faker';

import {
  HouseholdMember,
  SlcspResidence,
} from '@enroll/slcsp-calculator/data-access';

import { mockCoverage } from './member-coverage.mock';

export const absentHouseholdMember = (): HouseholdMember => {
  const householdMember: HouseholdMember = {
    primaryMember: true,
    relationship: 'self',
    name: faker.name.firstName(),
    dob: {
      month: '1',
      day: '15',
      year: '2000',
    },
    residences: absentResidences(),
    coverage: mockCoverage(),
  };

  return householdMember;
};

const absentResidences = (): SlcspResidence[] => {
  const residence1: SlcspResidence = {
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
      jul: false,
      aug: false,
      sep: false,
      oct: false,
      nov: false,
      dec: false,
    },
    absent: false,
  };

  const absentResidence: SlcspResidence = {
    county: {
      zipcode: '',
      name: '',
      fips: '',
      state: '',
    },
    months: {
      jan: false,
      feb: false,
      mar: false,
      apr: false,
      may: false,
      jun: false,
      jul: true,
      aug: true,
      sep: true,
      oct: true,
      nov: true,
      dec: true,
    },
    absent: true,
  };

  return [residence1, absentResidence];
};
