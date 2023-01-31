import {
  MarketplaceCounty,
  SlcspResidence,
} from '@enroll/slcsp-calculator/data-access';

export const mockResidence = (): SlcspResidence => ({
  county: mockCounty(),
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

export const mockCounty = (): MarketplaceCounty => ({
  zipcode: '04003',
  name: 'Cumberland County',
  fips: '23005',
  state: 'ME',
});

export const createDifferentResidences = (): SlcspResidence[] => {
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
  };

  const residence2: SlcspResidence = {
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
