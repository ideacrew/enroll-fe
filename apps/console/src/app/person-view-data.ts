export interface Issuer {
  id: string;
  name: string;
  fein: string;
}

export interface Product {
  id: string;
  hios_id: string;
  name: string;
  product_kind: string;
  issuer: Issuer;
}

export interface ResponsibleParty {
  responsible_party_id: string;
  person_name: PersonName;
}

export interface PersonName {
   first_name: string;
   last_name: string;
   middle_name?: string;
   name_pfx?: string;
   name_sfx?: string;
}

export interface Member {
  hbx_assigned_id: string;
  dob: Date;
  gender: string;
  ssn?: string;
}

// This is the top level object returned for a person resource.
export interface Person {
  id: string;
  person_name: PersonName;
  authority_member_id: string;
  members: Array<Member>;
}

export interface PremiumCredit {
  start_on: Date;
  end_on?: Date;
  kind: string;
  credit_amount: number;
  total: number;
  responsible_amount: number;
}

export interface Enrollee {
  coverage_start: Date;
  coverage_end?: Date;
  tobacco_use?: boolean;
  premium_amount: number;
  hbx_member_id: string;
  person_name: PersonName;
  dob: Date;
  carrier_member_id?: string;
  carrier_policy_id?: string;
  relationship: string;
}

export interface Transaction {
  id: string;
  kind: string;
  status: string;
  submitted_at: string;
}

export interface Policy {
  hbx_assigned_id: string;
  hbx_enrollment_ids?: Array<string>;
  rating_area?: string;
  coverage_start: Date;
  coverage_end?: Date;
  total_amount: number;
  responsible_amount: number;
  credited_amount: number;
  kind: string;
  market_kind: string;
  product: Product;
  subscriber_id: string;
  enrollees: Array<Enrollee>;
  responsible_party?: ResponsibleParty;
  premium_credits: Array<PremiumCredit>;
  transaction: Array<Transaction>;
}