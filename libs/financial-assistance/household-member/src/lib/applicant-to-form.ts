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
    lives_with_primary,
    citizen_status,
    is_incarcerated,
    indian_tribe_member,
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

  const additionalInformation = {
    citizenOrNational: citizen_status === 'us_citizen',
    naturalizedCitizen: citizen_status === 'naturalized_citizen',
    lawfulPresence:
      citizen_status === 'alien_lawfully_present' ||
      citizen_status === 'lawful_permanent_resident',
    is_incarcerated,
    indian_tribe_member,
  };

  // Ethnicities

  const livingSituation = lives_with_primary ?? 'livesWithPrimary';

  return {
    is_applying_coverage,
    personalInformation,
    livingSituation,
    additionalInformation,
  };
};
