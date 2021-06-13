import { UsStateAbbreviationKind } from './usStateAbbreviation';

export interface Address {
  street1: string;
  street2?: string;
  city: string;
  state: UsStateAbbreviationKind;
  zipcode: string;
  county?: string;
}
