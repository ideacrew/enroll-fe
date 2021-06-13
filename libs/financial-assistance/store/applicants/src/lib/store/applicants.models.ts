/* eslint-disable @typescript-eslint/naming-convention */
import {
  CitizenKind,
  RelationshipKind,
} from '@enroll/financial-assistance/entities';

/**
 * Interface for the 'Applicants' data
 */
export interface ApplicantsEntity {
  id: string; // Primary ID
  first_name: string;
  last_name: string;
  dob: Date;
  gender: 'male' | 'female';
  relationship?: RelationshipKind;
  aasm_state: string;
  citizen_status?: CitizenKind;
}
