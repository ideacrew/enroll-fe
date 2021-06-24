import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  VlpDocumentKind,
  vlpDocumentKind,
} from '@enroll/financial-assistance/entities';

import { HouseholdMemberService } from '../household-member.service';

@Component({
  selector: 'enroll-immigration-document',
  templateUrl: './immigration-document.component.html',
  styleUrls: ['./immigration-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImmigrationDocumentComponent {
  vlpDocumentKind = vlpDocumentKind;
  constructor(public newHouseholdMember: HouseholdMemberService) {}

  needsAlienNumber: VlpDocumentKind[] = [
    'I-327 (Reentry Permit)',
    'I-551 (Permanent Resident Card)',
    'I-571 (Refugee Travel Document)',
    'I-766 (Employment Authorization Card)',
    'Certificate of Citizenship',
    'Naturalization Certificate',
    'Machine Readable Immigrant Visa (with Temporary I-551 Language)',
    'Temporary I-551 Stamp (on passport or I-94)',
    'Other (With Alien Number)',
  ];

  needsPassportNumber: VlpDocumentKind[] = [
    'Machine Readable Immigrant Visa (with Temporary I-551 Language)',
    'Temporary I-551 Stamp (on passport or I-94)',
    'I-94 (Arrival/Departure Record) in Unexpired Foreign Passport',
    'Unexpired Foreign Passport',
    'I-20 (Certificate of Eligibility for Nonimmigrant (F-1) Student Status)',
    'DS2019 (Certificate of Eligibility for Exchange Visitor (J-1) Status)',
    'Other (With Alien Number)',
    'Other (With I-94 Number)',
  ];

  needsSevisId: VlpDocumentKind[] = [
    'I-94 (Arrival/Departure Record)',
    'I-94 (Arrival/Departure Record) in Unexpired Foreign Passport',
    'Unexpired Foreign Passport',
    'I-20 (Certificate of Eligibility for Nonimmigrant (F-1) Student Status)',
    'DS2019 (Certificate of Eligibility for Exchange Visitor (J-1) Status)',
    'Other (With Alien Number)',
    'Other (With I-94 Number)',
  ];

  needsCountryOfCitizenship: VlpDocumentKind[] = [
    'Machine Readable Immigrant Visa (with Temporary I-551 Language)',
    'Temporary I-551 Stamp (on passport or I-94)',
    'I-94 (Arrival/Departure Record) in Unexpired Foreign Passport',
    'Unexpired Foreign Passport',
    'I-20 (Certificate of Eligibility for Nonimmigrant (F-1) Student Status)',
    'DS2019 (Certificate of Eligibility for Exchange Visitor (J-1) Status)',
    'Other (With Alien Number)',
    'Other (With I-94 Number)',
  ];

  needsI94Number: VlpDocumentKind[] = [
    'I-94 (Arrival/Departure Record)',
    'I-94 (Arrival/Departure Record) in Unexpired Foreign Passport',
    'Unexpired Foreign Passport',
    'I-20 (Certificate of Eligibility for Nonimmigrant (F-1) Student Status)',
    'DS2019 (Certificate of Eligibility for Exchange Visitor (J-1) Status)',
    'Other (With I-94 Number)',
  ];

  needsVisaNumber: VlpDocumentKind[] = [
    'Machine Readable Immigrant Visa (with Temporary I-551 Language)',
    'I-94 (Arrival/Departure Record) in Unexpired Foreign Passport',
  ];

  needsCardNumber: VlpDocumentKind[] = [
    'I-551 (Permanent Resident Card)',
    'I-766 (Employment Authorization Card)',
  ];

  needsDocumentDescription: VlpDocumentKind[] = [
    'Other (With Alien Number)',
    'Other (With I-94 Number)',
  ];

  needsExpirationDate: VlpDocumentKind[] = [
    'I-327 (Reentry Permit)',
    'I-551 (Permanent Resident Card)',
    'I-571 (Refugee Travel Document)',
    'I-766 (Employment Authorization Card)',
    'Machine Readable Immigrant Visa (with Temporary I-551 Language)',
    'Temporary I-551 Stamp (on passport or I-94)',
    'I-94 (Arrival/Departure Record)',
    'I-94 (Arrival/Departure Record) in Unexpired Foreign Passport',
    'Unexpired Foreign Passport',
    'I-20 (Certificate of Eligibility for Nonimmigrant (F-1) Student Status)',
    'DS2019 (Certificate of Eligibility for Exchange Visitor (J-1) Status)',
    'Other (With Alien Number)',
    'Other (With I-94 Number)',
  ];

  // Convert to pipe
  expirationDateLabel(document: VlpDocumentKind): string {
    switch (document) {
      case 'I-327 (Reentry Permit)':
        return 'I-327';
      case 'I-551 (Permanent Resident Card)':
        return 'I-551';

      case 'I-571 (Refugee Travel Document)':
        return 'I-571';

      case 'I-766 (Employment Authorization Card)':
        return 'I-766';

      case 'Machine Readable Immigrant Visa (with Temporary I-551 Language)':
        return 'Temporary I-551';

      case 'Temporary I-551 Stamp (on passport or I-94)':
        return 'Temporary I-551 Stamp';

      case 'I-94 (Arrival/Departure Record)':
      case 'I-94 (Arrival/Departure Record) in Unexpired Foreign Passport':
      case 'Unexpired Foreign Passport':
      case 'I-20 (Certificate of Eligibility for Nonimmigrant (F-1) Student Status)':
      case 'DS2019 (Certificate of Eligibility for Exchange Visitor (J-1) Status)':
      case 'Other (With Alien Number)':
      case 'Other (With I-94 Number)':
        return 'Passport';

      default:
        return '';
    }
  }
}
