import { Month } from '@enroll/shared/types';

import { MarketplaceCounty } from './county';

export type SlcspResidence = {
  county: MarketplaceCounty;
  months: SlcspMonths;
  absent: boolean;
};

export type SlcspCounty = MarketplaceCounty;
export type SlcspMonths = Record<Month, boolean>;
