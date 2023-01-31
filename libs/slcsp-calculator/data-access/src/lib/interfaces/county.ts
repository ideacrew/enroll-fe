export type MarketplaceCounty = {
  zipcode: string;
  name: string; // "Dead or abroad"
  fips: string;
  state: string;
};

export type MarketplaceCountyResponse = {
  counties: MarketplaceCounty[];
};
