import { faker } from '@faker-js/faker';

import { AllRelationships, TaxRelationships } from '@enroll/shared/types';
import { HouseholdMember } from '@enroll/slcsp-calculator/data-access';

import {
  createDifferentResidences,
  mockResidence,
} from './member-residence.mock';
import { mockCoverage } from './member-coverage.mock';

// Relationships might matter
// DOB might matter

export const mockPrimaryHouseholdMember = (): HouseholdMember => {
  const householdMember: HouseholdMember = {
    primaryMember: true,
    relationship: 'self',
    name: faker.name.firstName(),
    dob: {
      month: '1',
      day: '15',
      year: '2000',
    },
    residences: [mockResidence()],
    coverage: mockCoverage(),
  };

  return householdMember;
};

export const mockSecondaryHouseholdMember = (): HouseholdMember => {
  const householdMember: HouseholdMember = {
    primaryMember: false,
    relationship:
      faker.helpers.arrayElement<AllRelationships>(TaxRelationships),
    name: faker.name.firstName(),
    dob: {
      month: '1',
      day: '15',
      year: '2000',
    },
    residences: [mockResidence()],
    coverage: mockCoverage(),
  };

  return householdMember;
};

export const primaryMemberThatMoves = (): HouseholdMember => {
  const householdMember: HouseholdMember = {
    primaryMember: true,
    relationship: 'self',
    name: faker.name.firstName(),
    dob: {
      month: '1',
      day: '15',
      year: '2000',
    },
    residences: createDifferentResidences(),
    coverage: mockCoverage(),
  };

  return householdMember;
};
