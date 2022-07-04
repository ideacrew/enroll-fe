export const taxFiler = [
  'tax_filer',
  'single',
  'joint',
  'separate',
  'dependent',
  'non_filer',
] as const;

export type TaxFilerKind = typeof taxFiler[number];
