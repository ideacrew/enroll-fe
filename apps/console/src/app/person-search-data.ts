/* eslint-disable @typescript-eslint/naming-convention */

// request to POST /transaction_management/people/search
export interface PersonSearchRequest {
  q: string;
}

export interface PlanSearchResult {
  id: string;
  name: string;
  hios_plan_id: string;
  carrier_id: string;
}

export interface PolicySearchResult {
  id: string;
  plan_id: string;
  enrollee_count: number;
  plan: PlanSearchResult;
}

export interface MemberSearchResult {
  id: string;
  hbx_member_id: string;
  ssn?: string;
  dob: Date;
  policies: Array<PolicySearchResult>;
}

export interface PersonNamesResult {
  name_pfx?: string;
  name_sfx?: string;
  name_middle?: string;
  name_last: string;
  name_first: string;
  name_full?: string;
}

export interface PersonSearchResult {
  id: string;
  person: PersonNamesResult;
  members: Array<MemberSearchResult>;
}

// response from POST /transaction_management/people/search
export interface PersonSearchResponse {
  people: Array<PersonSearchResult>;
  total: number;
}
