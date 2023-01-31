import { Month } from '@enroll/shared/types';

export type PartialMonths = {
  [key in Month]?: boolean;
};
