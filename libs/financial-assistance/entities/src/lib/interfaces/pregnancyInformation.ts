interface NotPregnant {
  isPregnant: false;
}

interface Pregnant {
  isPregnant: true;
  isEnrolledInMedicaid: boolean;
  isPostpartumPeriod: boolean;
  expectedChildrenCount: number;
  pregnancyDueOn: Date;
  pregnancyEndOn: Date;
}

export type PregnancyInformation = Pregnant | NotPregnant;
