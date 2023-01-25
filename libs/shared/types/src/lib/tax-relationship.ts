// eslint-disable-next-line @typescript-eslint/naming-convention
export const TaxRelationships = [
  'spouse',
  'domestic-partner',
  'child',
  'parent',
  'sibling',
  'unrelated',
  'aunt-uncle',
  'nephew-niece',
  'grandchild',
  'grandparent',
  'father-mother-in-law',
  'daughter-son-in-law',
  'brother-sister-in-law',
  'cousin',
  'domestic-partners-child',
  'parents-domestic-partner',
] as const;

export type TaxRelationship = (typeof TaxRelationships)[number];

export type AllRelationships = TaxRelationship | 'self';
