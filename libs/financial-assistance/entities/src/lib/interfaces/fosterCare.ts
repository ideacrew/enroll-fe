interface NoFosterCare {
  isFormerFosterCare: false | undefined;
}

interface FosterCare {
  isFormerFosterCare: true;
  ageLeftFosterCare: number;
  fosterCareUsState: string;
  hadMedicaidDuringFosterCare: boolean;
}

export type FosterCareInformation = NoFosterCare | FosterCare;
