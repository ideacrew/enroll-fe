/* eslint-disable @typescript-eslint/naming-convention */
export interface VlpBaseDocument {
  subject: VlpDocumentKind;
  alien_number?: string;
  i94_number?: string;
  visa_number?: string;
  passport_number?: string;
  sevis_id?: string;
  naturalization_number?: string;
  receipt_number?: string;
  citizenship_number?: string;
  card_number?: string;
  country_of_citizenship?: string;
  expiration_date?: string; // Date
  issuing_country?: string;
  description?: string;
}

interface I327Document {
  subject: 'I-327 (Reentry Permit)';
  alien_number: string;
  expiration_date: string;
}

interface I551Document {
  subject: 'I-551 (Permanent Resident Card)';
  alien_number: string;
  card_number: string;
  expiration_date: string;
}

interface I571Document {
  subject: 'I-571 (Refugee Travel Document)';
  alien_number: string;
  expiration_date: string;
}

interface I766Document {
  subject: 'I-766 (Employment Authorization Card)';
  alien_number: string;
  card_number: string;
  expiration_date: string;
}

interface CertificateOfCitizenship {
  subject: 'Certificate of Citizenship';
  alien_number: string;
  citizenship_number: string;
}

interface NaturalizationCertificate {
  subject: 'Naturalization Certificate';
  alien_number: string;
  naturalization_number: string;
}

interface ImmigrantVisa {
  subject: 'Machine Readable Immigrant Visa (with Temporary I-551 Language)';
  alien_number: string;
  visa_number: string;
  passport_number: string;
  expiration_date: string;
  country_of_citizenship: string;
}

interface TemporaryI551Stamp {
  subject: 'Temporary I-551 Stamp (on passport or I-94)';
  alien_number: string;
  passport_number: string;
  country_of_citizenship: string;
  expiration_date: string;
}

interface I94Document {
  subject: 'I-94 (Arrival/Departure Record)';
  passport_number: string;
  sevis_id: string;
  i94_number: string;
  expiration_date: string;
}

interface I194ForeignPassport {
  subject: 'I-94 (Arrival/Departure Record) in Unexpired Foreign Passport';
  sevis_id: string;
  country_of_citizenship: string;
  i94_number: string;
  visa_number: string;
  expiration_date: string;
}

interface UnexpiredForeignPassport {
  subject: 'Unexpired Foreign Passport';
  passport_number: string;
  sevis_id: string;
  country_of_citizenship: string;
  i94_number: string;
  expiration_date: string;
}

interface I20Document {
  subject: 'I-20 (Certificate of Eligibility for Nonimmigrant (F-1) Student Status)';
  passport_number: string;
  sevis_id: string;
  country_of_citizenship: string;
  i94_number: string;
  expiration_date: string;
}

interface DS2019Document {
  subject: 'DS2019 (Certificate of Eligibility for Exchange Visitor (J-1) Status)';
  passport_number: string;
  sevis_id: string;
  country_of_citizenship: string;
  i94_number: string;
  expiration_date: string;
}

interface OtherDocumentWithAlienNumber {
  subject: 'Other (With Alien Number)';
  alien_number: string;
  passport_number: string;
  sevis_id: string;
  country_of_citizenship: string;
  description: string;
  expiration_date: string;
}

interface OtherDocumentWithI94Number {
  subject: 'Other (With I-94 Number)';
  passport_number: string;
  sevis_id: string;
  country_of_citizenship: string;
  i94_number: string;
  description: string;
  expiration_date: string;
}

export type VlpDocument =
  | I327Document
  | I551Document
  | I571Document
  | I766Document
  | CertificateOfCitizenship
  | NaturalizationCertificate
  | ImmigrantVisa
  | TemporaryI551Stamp
  | I94Document
  | I194ForeignPassport
  | UnexpiredForeignPassport
  | I20Document
  | DS2019Document
  | OtherDocumentWithAlienNumber
  | OtherDocumentWithI94Number;

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
