/* eslint-disable @typescript-eslint/naming-convention */
export interface ApplicantReference {
  first_name: string;
  last_name: string;
  dob: string;
  person_hbx_id: string; // update to family_member_hbx_id;
  encrypted_ssn: string;
}
