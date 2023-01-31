import { PartialMonths } from '@enroll/slcsp-calculator/types';
import { extendResidenceMonths } from './extend-residence-months';

describe('extending residence months', () => {
  it('should extend residence months', () => {
    const residenceMonths: PartialMonths = {
      jan: true,
      feb: true,
      mar: true,
    };

    expect(extendResidenceMonths(residenceMonths)).toEqual({
      jan: true,
      feb: true,
      mar: true,
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
  });
});
