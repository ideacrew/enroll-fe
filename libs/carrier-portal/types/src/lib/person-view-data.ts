/* eslint-disable @typescript-eslint/naming-convention */

// Date as a string, specifically "YYYY-MM-DD"
export type DateString = string;

export type Carrier = {
  id: string;
  name: string;
};

export type Plan = {
  id: string;
  hios_id: string;
  name: string;
  product_kind: string;
  coverage_year: string;
  carrier: Carrier;
};

export type PolicyResponsibleParty = {
  person_id: string;
  responsible_party_id: string;
  person_name: PersonName;
};

export type ResponsibleParty = {
  id: string;
  person_name: PersonName;
  policies: Policy[];
};

export type PersonName = {
  first_name: string;
  last_name: string;
  middle_name?: string;
  name_pfx?: string;
  name_sfx?: string;
  full_name?: string;
};

export type Member = {
  hbx_member_id: string;
  dob: DateString;
  gender: string;
  ssn?: string;
  policies: Policy[];
};

export type Address = {
  address_1: string;
  address_2?: string;
  city: string;
  state: string;
  zipcode: string;
  county_fips?: string;
};

// This is the top level object returned for a person resource.
// Comes from GET /transaction_management/people/<person_id>
export type Person = {
  id: string;
  person_name: PersonName;
  members: Member[];
  responsible_parties: ResponsibleParty[];
  home_address?: Address;
  mailing_address?: Address;
  home_email?: string;
  home_phone?: string;
  mobile_phone?: string;
};

export type PremiumCredit = {
  start_on: DateString;
  end_on?: DateString;
  kind: string;
  credit_amount: number;
  total: number;
  responsible_amount: number;
};

export type Enrollee = {
  person_id: string;
  coverage_start: DateString;
  coverage_end?: DateString;
  tobacco_use?: string; // if null/not defined show "Unknown" or "U"
  premium_amount: number;
  hbx_member_id: string;
  person_name: PersonName;
  dob: DateString;
  carrier_member_id?: string;
  carrier_policy_id?: string;
  relationship: string;
};

export type Broker = {
  broker_id: string;
  broker_name: string;
  broker_npn: string;
};

export type Transaction = {
  id: string;
  kind: string;
  status: string;
  submitted_at: string;
};

export type Policy = {
  credited_amount: number;
  broker?: Broker;
  enrollees: Enrollee[];
  hbx_assigned_id: string;
  hbx_enrollment_ids: string[];
  plan: Plan;
  premium_credits: PremiumCredit[];
  rating_area?: string;
  responsible_amount: number;
  responsible_party?: PolicyResponsibleParty;
  subscriber_hbx_member_id: string;
  total_amount: number;
  transactions: Transaction[];
  status: string;
};

export const defaultPolicy: Policy = {
  hbx_assigned_id: '',
  hbx_enrollment_ids: [],
  total_amount: 0,
  responsible_amount: 0,
  credited_amount: 0,
  enrollees: [],
  premium_credits: [],
  transactions: [],
  plan: {
    id: '',
    hios_id: '',
    name: '',
    product_kind: '',
    coverage_year: '',
    carrier: {
      id: '',
      name: '',
    },
  },
  subscriber_hbx_member_id: '',
  status: 'Submitted',
};
