import { Month } from '@enroll/shared/types';
import { MarketplaceCounty } from './county';

export type Residence = {
  county: MarketplaceCounty;
  months: Record<Month, boolean>;
};

export type SlcspCounty = MarketplaceCounty;
export type SlcspMonths = Record<Month, boolean>;
