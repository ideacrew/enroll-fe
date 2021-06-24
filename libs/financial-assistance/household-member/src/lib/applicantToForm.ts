/* eslint-disable @typescript-eslint/naming-convention */
import { ApplicantsEntity } from '@enroll/financial-assistance/store/applicants';

export const applicantToForm = (applicant: ApplicantsEntity) => {
  const {
    first_name,
    middle_name,
    last_name,
    name_sfx,
    dob,
    encrypted_ssn,
    no_ssn,
    gender,
    relationship,
    is_applying_coverage,
  } = applicant;

  const personalInformation = {
    first_name,
    middle_name,
    last_name,
    name_sfx,
    dob,
    ssnInformation: {
      ssn: encrypted_ssn ?? '',
      no_ssn: no_ssn ?? true,
    },
    gender,
    relationship,
  };

  return { is_applying_coverage, personalInformation };
};
