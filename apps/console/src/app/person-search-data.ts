/* eslint-disable @typescript-eslint/naming-convention */

// request to POST /transaction_management/people/search
export type PersonSearchRequest =
  | PersonIdentifierQueryRequest
  | PersonNameQueryRequest;

export type PersonIdentifierQueryRequest = {
  q: string;
}

export type PersonNameQueryRequest = {
  name: {
    first_name?: string;
    last_name?: string;
  };
}

export type PlanSearchResult = {
  name: string;
  hios_plan_id: string;
}

export type PolicySearchResult = {
  id: string;
  enrollee_count: number;
  plan: PlanSearchResult;
}

export type MemberSearchResult = {
  id: string;
  hbx_member_id: string;
  ssn?: string;
  dob: string;
  gender: string;
  policies: PolicySearchResult[];
}

export type PersonNamesResult = {
  name_pfx?: string;
  name_sfx?: string;
  middle_name?: string;
  last_name: string;
  first_name: string;
  full_name?: string;
}

export type PersonSearchResult = {
  id: string;
  person_name: PersonNamesResult;
  members: MemberSearchResult[];
}

export function isPersonMemberIdentifierSearchRequest(
  psq: PersonSearchRequest
): psq is PersonIdentifierQueryRequest {
  return (psq as PersonIdentifierQueryRequest).q !== undefined;
}

// There HAS to be a less ugly way to do this.
export function constructNameQuery(
  firstName: string,
  lastName: string | undefined
): PersonNameQueryRequest | undefined {
  // If only one name was entered, consider it to be the last name
  if (lastName === undefined) {
    return {
      name: {
        last_name: firstName,
      },
    };
  }

  return {
    name: {
      first_name: firstName,
      last_name: lastName,
    },
  };
}
