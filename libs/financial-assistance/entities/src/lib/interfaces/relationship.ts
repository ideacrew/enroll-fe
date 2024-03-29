/* eslint-disable @typescript-eslint/naming-convention */
import { ApplicantReference } from './applicant-reference';

export type Relationship = {
  kind: RelationshipKind;
  applicant_reference: ApplicantReference;
  relative_reference: ApplicantReference;
  lives_with_household_member?: boolean;
};

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

export type RelationshipKind = (typeof relationships)[number];
