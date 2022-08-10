/* eslint-disable @typescript-eslint/naming-convention */

// Date as a string, specifically "YYYY-MM-DD"
export type DateString = string;

export interface Carrier {
  id: string;
  name: string;
}

export interface Plan {
  id: string;
  hios_id: string;
  name: string;
  product_kind: string;
  carrier: Carrier;
}

export interface PolicyResponsibleParty {
  responsible_party_id: string;
  person_name: PersonName;
}

export interface ResponsibleParty {
  responsible_party_id: string;
  person_name: PersonName;
  policies: Array<Policy>;
}

export interface PersonName {
  first_name: string;
  last_name: string;
  middle_name?: string | null;
  name_pfx?: string | null;
  name_sfx?: string | null;
  full_name?: string | null;
}

export interface Member {
  hbx_assigned_id: string;
  dob: Date;
  gender: string;
  ssn?: string | null;
}

// This is the top level object returned for a person resource.
// Comes from GET /transaction_management/people/<person_id>
export interface Person {
  id: string;
  person_name: PersonName;
  members: Array<Member>;
  responsible_parties?: Array<ResponsibleParty>;
}

export interface PremiumCredit {
  start_on: DateString;
  end_on?: DateString | null;
  kind: string;
  credit_amount: number;
  total: number;
  responsible_amount: number;
}

export interface Enrollee {
  coverage_start: DateString;
  coverage_end?: DateString | null;
  tobacco_use?: boolean | null;
  premium_amount: number;
  hbx_member_id: string;
  person_name: PersonName;
  dob: DateString;
  carrier_member_id?: string | null;
  carrier_policy_id?: string | null;
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
  rating_area?: string | null;
  coverage_start: DateString;
  coverage_end?: DateString | null;
  total_amount: number;
  responsible_amount: number;
  credited_amount: number;
  kind: string;
  plan: Plan;
  subscriber_hbx_member_id: string;
  enrollees: Array<Enrollee>;
  responsible_party?: PolicyResponsibleParty;
  premium_credits?: Array<PremiumCredit>;
  transaction: Array<Transaction>;
}
