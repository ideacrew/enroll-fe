/* eslint-disable @typescript-eslint/naming-convention */
import {
  EmployerIncomeKind,
  IncomeFrequency,
  OtherIncomeKind,
  UnemploymentIncomeKind,
} from '@enroll/financial-assistance/entities';

interface BaseIncome {
  amount: number;
  frequency_kind: IncomeFrequency;
  start_on: string;
}

export interface EmployerIncome extends BaseIncome {
  kind: EmployerIncomeKind;
  employer_name: string;
  employer_address: {
    kind: string;
    address_1: string;
    address_2?: string;
    city: string;
    state: string;
    zip: string;
  };
  employer_phone: {
    kind: string;
    full_phone_number: string;
  };
}

export interface SelfEmploymentIncome extends BaseIncome {
  kind: SelfEmploymentIncome;
}

export interface UnemploymentIncome extends BaseIncome {
  kind: UnemploymentIncomeKind;
}

export interface OtherIncome extends BaseIncome {
  kind: OtherIncomeKind;
}

export type Income =
  | EmployerIncome
  | SelfEmploymentIncome
  | UnemploymentIncome
  | OtherIncome;
