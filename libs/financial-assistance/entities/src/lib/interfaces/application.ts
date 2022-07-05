/* eslint-disable @typescript-eslint/naming-convention */

import { Applicant } from './applicant';
import { FamilyReference } from './family';
import { Relationship } from './relationship';
import { TaxHousehold } from './tax-household';
import { UsStateAbbreviationKind } from './us-state-abbreviation';

export interface FinancialAssistanceApplication {
  family_reference: FamilyReference;
  assistance_year: number;
  applicants: Applicant[];
  us_state: UsStateAbbreviationKind;
  hbx_id: string;

  tax_households?: TaxHousehold[];
  relationships?: Relationship[];

  years_to_renew?: number;
  renewal_consent_through_year?: number;
  is_ridp_verified?: boolean;
  is_renewal_authorized?: boolean;

  // TBD
  // mitc_households: MitcHousehold[];
  // mits_tax_returns: MitcTaxReturn[];
}
