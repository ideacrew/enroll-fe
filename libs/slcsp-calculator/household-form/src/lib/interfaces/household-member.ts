export type HouseholdMember = {
  name: string;
  dob: {
    month: string;
    day: string;
    year: string;
  };
  placesLived: PlacesLived;
  marketPlaceCoverage: MarketplaceCoverage;
};

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
] as const;

export type Month = (typeof months)[number];

type PlacesLived = Record<Month, string>;
type MarketplaceCoverage = Record<Month, boolean>;
