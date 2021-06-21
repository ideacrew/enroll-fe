import {
  Address,
  CitizenKind,
  RelationshipKind,
  VlpDocument,
} from '@enroll/financial-assistance/entities';

/* eslint-disable @typescript-eslint/naming-convention */
export interface BaseHouseholdMember {
  name_pfx?: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  name_sfx?: string;
  gender: 'male' | 'female';
  dob: string; // Date

  // SSN?
  no_ssn: boolean;
  ssn?: string;

  relationship: RelationshipKind;
  lives_with_primary: boolean;
  addresses?: Address[];
}

export interface NeedsCoverageHouseholdMember extends BaseHouseholdMember {
  is_applying_coverage: true;

  citizen_status: CitizenKind;
  vlp_document?: VlpDocument;
  is_incarcerated: boolean;

  indian_tribe_member: boolean;
  tribal_id?: string;
}

export interface NoCoverageHouseholdMember extends BaseHouseholdMember {
  is_applying_coverage: false;
}

export type NewHouseholdMember =
  | NeedsCoverageHouseholdMember
  | NoCoverageHouseholdMember;
