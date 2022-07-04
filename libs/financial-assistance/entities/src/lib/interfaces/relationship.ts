/* eslint-disable @typescript-eslint/naming-convention */
import { ApplicantReference } from './applicantReference';

export interface Relationship {
  kind: RelationshipKind;
  applicant_reference: ApplicantReference;
  relative_reference: ApplicantReference;
  lives_with_household_member?: boolean;
}

export const relationships = [
  'self',
  'spouse',
  'domestic_partner',
  'child',
  'parent',
  'sibling',
  'unrelated',
  'aunt_or_uncle',
  'nephew_or_niece',
  'grandchild',
  'grandparent',
] as const;

export type RelationshipKind = typeof relationships[number];
