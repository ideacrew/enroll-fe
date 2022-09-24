/* eslint-disable @typescript-eslint/naming-convention */

// request to POST /transaction_management/people/search
export type PersonSearchRequest =
  | PersonIdentifierQueryRequest
  | PersonNameQueryRequest;

export interface PersonIdentifierQueryRequest {
  q: string;
}

export interface PersonNameQueryRequest {
  name: PersonNameQueryParts;
}

export type PersonNameQueryParts =
  | PersonFNameQuery
  | PersonLNameQuery
  | PersonNameQuery;

export interface PersonFNameQuery {
  first_name: string;
}

export interface PersonLNameQuery {
  last_name: string;
}

export interface PersonNameQuery {
  first_name: string;
  last_name: string;
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

export function isPersonMemberIdentifierSearchRequest(
  psq: PersonSearchRequest
): psq is PersonIdentifierQueryRequest {
  return (psq as PersonIdentifierQueryRequest).q !== undefined;
}

export function constructNameQuery(
  firstName: string,
  lastName: string
): PersonNameQueryRequest | undefined {
  const fNameIsBlank =
    !firstName ||
    typeof firstName == undefined ||
    (typeof firstName === 'string' && firstName.trim().length === 0);
  const lNameIsBlank =
    !lastName ||
    typeof lastName == undefined ||
    (typeof lastName === 'string' && lastName.trim().length === 0);

  if (fNameIsBlank && lNameIsBlank) {
    return undefined;
  }
  if (!fNameIsBlank && !lNameIsBlank) {
    return { name: { first_name: firstName, last_name: lastName } };
  } else if (fNameIsBlank) {
    return { name: { last_name: lastName } };
  } else {
    return { name: { first_name: firstName } };
  }
}
