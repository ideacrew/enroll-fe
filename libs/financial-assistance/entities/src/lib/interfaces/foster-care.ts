import { UsStateAbbreviationKind } from './us-state-abbreviation';

/* eslint-disable @typescript-eslint/naming-convention */
interface NoFosterCare {
  is_former_foster_care: false | undefined;
}

interface FosterCare {
  is_former_foster_care: true;
  age_left_foster_care: number;
  foster_care_us_state: UsStateAbbreviationKind;
  had_medicaid_during_foster_care: boolean;
}

export type FosterCareInformation = NoFosterCare | FosterCare;
