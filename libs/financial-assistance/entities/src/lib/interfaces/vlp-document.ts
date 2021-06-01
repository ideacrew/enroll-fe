export interface VlpBaseDocument {
  subject: VlpDocumentKind;
}

export const vlpDocumentKind = [
  'I-327 (Reentry Permit)',
  'I-551 (Permanent Resident Card)',
  'I-571 (Refugee Travel Document)',
  'I-766 (Employment Authorization Card)',
  'Certificate of Citizenship',
  'Naturalization Certificate',
  'Machine Readable Immigrant Visa (with Temporary I-551 Language)',
  'Temporary I-551 Stamp (on passport or I-94)',
  'I-94 (Arrival/Departure Record)',
  'I-94 (Arrival/Departure Record) in Unexpired Foreign Passport',
  'Unexpired Foreign Passport',
  'I-20 (Certificate of Eligibility for Nonimmigrant (F-1) Student Status)',
  'DS2019 (Certificate of Eligibility for Exchange Visitor (J-1) Status)',
  'Other (With Alien Number)',
  'Other (With I-94 Number)',
] as const;

export type VlpDocumentKind = typeof vlpDocumentKind[number];
