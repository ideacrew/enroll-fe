import { AllRelationships, TaxRelationships } from '@enroll/shared/types';
import {
  Coverage,
  HouseholdMember,
  MarketplaceCounty,
  Residence,
} from '@enroll/slcsp-calculator/data-access';
import { faker } from '@faker-js/faker';

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
    residences: [createResidence()],
    coverage: createCoverage(),
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
    residences: [createResidence()],
    coverage: createCoverage(),
  };

  return householdMember;
};

const createCounty = (): MarketplaceCounty => ({
  zipcode: '04003',
  name: 'Cumberland County',
  fips: '23005',
  state: 'ME',
});

const createCoverage = (): Coverage => ({
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
});

const createResidence = (): Residence => ({
  county: createCounty(),
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
});
