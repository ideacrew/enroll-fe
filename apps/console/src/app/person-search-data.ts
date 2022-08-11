/* eslint-disable @typescript-eslint/naming-convention */

// request to POST /transaction_management/people/search
export interface PersonSearchRequest {
  q: string;
}

export interface PlanSearchResult {
  name: string;
  hios_plan_id: string;
}

export interface PolicySearchResult {
  id: string;
  enrollee_count: number;
  plan: PlanSearchResult;
}

export interface MemberSearchResult {
  id: string;
  hbx_member_id: string;
  ssn?: string;
  dob: string;
  gender: string;
  policies: PolicySearchResult[];
}

export interface PersonNamesResult {
  name_pfx?: string;
  name_sfx?: string;
  middle_name?: string;
  last_name: string;
  first_name: string;
  full_name?: string;
}

export interface PersonSearchResult {
  id: string;
  person_name: PersonNamesResult;
  members: MemberSearchResult[];
}
