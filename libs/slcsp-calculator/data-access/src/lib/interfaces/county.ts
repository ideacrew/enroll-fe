export type MarketplaceCounty = {
  zipcode: string;
  name: string;
  fips: string;
  state: string;
};

export type MarketplaceCountyResponse = {
  counties: MarketplaceCounty[];
};
