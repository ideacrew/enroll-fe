import { Month, months } from '@enroll/shared/types';
import { PartialMonths } from '@enroll/slcsp-calculator/types';

export const extendResidenceMonths = (
  existingMonths: PartialMonths
): Record<Month, boolean> => {
  // Whatever months aren't present in the existing months, add them and set them to false
  const extendedMonths: Record<Month, boolean> = {} as Record<Month, boolean>;

  for (const month of months) {
    extendedMonths[month] = existingMonths[month] ?? false;
  }

  return extendedMonths;
};
