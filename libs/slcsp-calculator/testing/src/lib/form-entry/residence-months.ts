import { Month } from '@enroll/shared/types';

export const fillInResidenceMonths = (
  index: number,
  months: Record<Month, boolean>
) => {
  for (const month in months) {
    // Is month true?
    const isMonthTrue = months[month as Month];

    if (isMonthTrue) {
      cy.get(`[data-cy="${index}-${month}"]`).check();
    }
  }
};
