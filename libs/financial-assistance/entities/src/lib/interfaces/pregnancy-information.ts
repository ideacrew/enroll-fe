/* eslint-disable @typescript-eslint/naming-convention */
type NotPregnant = {
  is_pregnant: false;
};

type Pregnant = {
  is_pregnant: true;
  is_enrolled_in_medicaid: boolean;
  is_postpartum_period: boolean;
  expected_children_count: number;
  pregnancy_due_on: string; // Date
  pregnancyEndOn: string; // Date
};

export type PregnancyInformation = Pregnant | NotPregnant;
