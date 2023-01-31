import { Month } from '@enroll/shared/types';
import { ResidenceFormValue } from '@enroll/slcsp-calculator/types';

export const noGapInResidence = (residences: ResidenceFormValue[]): boolean => {
  let months: Record<Month, boolean> = {
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
  };

  for (const residence of residences) {
    months = { ...months, ...residence.months };
  }

  for (const month in months) {
    if (!months[month as Month]) return false;
  }

  return true;
};
