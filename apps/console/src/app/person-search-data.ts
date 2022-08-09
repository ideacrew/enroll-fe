/* eslint-disable @typescript-eslint/naming-convention */

// request to POST /transaction_management/people/search
export interface PersonSearchRequest {
  q: string;
}

export interface PlanSearchResult {
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
  policies: PolicySearchResult[];
}

export interface PersonNamesResult {
  name_pfx: string | null;
  name_sfx: string | null;
  middle_name: string | null;
  last_name: string;
  first_name: string;
  full_name?: string;
}

export interface PersonSearchResult {
  id: string;
  person: PersonNamesResult;
  members: MemberSearchResult[];
}

// response from POST /transaction_management/people/search
export interface PersonSearchResponse {
  people: PersonSearchResult[];
  total: number;
}
