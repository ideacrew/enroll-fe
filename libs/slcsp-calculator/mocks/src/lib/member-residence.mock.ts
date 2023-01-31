import {
  MarketplaceCounty,
  Residence,
} from '@enroll/slcsp-calculator/data-access';

export const mockResidence = (): Residence => ({
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

const createCounty = (): MarketplaceCounty => ({
  zipcode: '04003',
  name: 'Cumberland County',
  fips: '23005',
  state: 'ME',
});

export const createDifferentResidences = (): Residence[] => {
  const residence1: Residence = {
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
  };

  const residence2: Residence = {
    county: {
      zipcode: '04001',
      name: 'York County',
      fips: '23031',
      state: 'ME',
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
  };

  return [residence1, residence2];
};
