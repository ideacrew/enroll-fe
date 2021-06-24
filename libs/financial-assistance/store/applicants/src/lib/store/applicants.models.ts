/* eslint-disable @typescript-eslint/naming-convention */
import {
  Address,
  CitizenKind,
  RelationshipKind,
  VlpDocument,
} from '@enroll/financial-assistance/entities';

/**
 * Interface for the 'Applicants' data
 */
export interface ApplicantsEntity {
  id: string; // Primary ID
  is_primary_applicant: boolean;
  is_applying_coverage: boolean;
  first_name: string;
  middle_name?: string;
  last_name: string;
  name_sfx?: string;
  dob: string;
  gender: 'male' | 'female';
  encrypted_ssn?: string;
  no_ssn?: boolean;
  relationship?: RelationshipKind;
  aasm_state: string;
  citizen_status?: CitizenKind;
  vlp_document?: VlpDocument;
  addresses: Address[];
  indian_tribe_member: boolean;
  tribal_id?: string;
  lives_with_primary?: boolean;
}
