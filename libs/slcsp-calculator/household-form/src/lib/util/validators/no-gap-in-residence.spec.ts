import { mockCounty } from '@enroll/slcsp-calculator/mocks';
import { ResidenceFormValue } from '@enroll/slcsp-calculator/types';

import { noGapInResidence } from './no-gap-in-residence';

describe('residence months validation', () => {
  it('should be valid', () => {
    const residences: ResidenceFormValue[] = [
      {
        county: mockCounty(),
        absent: false,
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
    ];

    expect(noGapInResidence(residences)).toBe(true);
  });

  it('should be invalid', () => {
    const residences: ResidenceFormValue[] = [
      {
        county: mockCounty(),
        absent: false,
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
          nov: false,
          dec: false,
        },
      },
    ];

    expect(noGapInResidence(residences)).toBe(false);
  });

  it('should be invalid', () => {
    const residences: ResidenceFormValue[] = [
      {
        county: mockCounty(),
        absent: false,
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
      },
      {
        county: mockCounty(),
        absent: false,
        months: {
          jul: true,
          aug: true,
          sep: true,
          oct: true,
          nov: false,
          dec: false,
        },
      },
    ];

    expect(noGapInResidence(residences)).toBe(false);
  });
  it('should be invalid', () => {
    const residences: ResidenceFormValue[] = [
      {
        county: mockCounty(),
        absent: false,
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
      },
      {
        county: mockCounty(),
        absent: false,
        months: {
          jul: true,
          aug: true,
          sep: true,
          oct: true,
          nov: true,
          dec: true,
        },
      },
    ];

    expect(noGapInResidence(residences)).toBe(true);
  });
});
