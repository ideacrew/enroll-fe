/* eslint-disable @typescript-eslint/naming-convention */
export type FamilyReference = {
  hbx_id: string;
}

export type FamilyMemberReference = {
  family_member_hbx_id: string;
  first_name: string;
  last_name: string;
  person_hbx_id: string;
  is_primary_family_member: string;
}
