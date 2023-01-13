/* eslint-disable @typescript-eslint/naming-convention */
import {
  EmployerIncomeKind,
  IncomeFrequency,
  OtherIncomeKind,
  UnemploymentIncomeKind,
} from '@enroll/financial-assistance/entities';

type BaseIncome = {
  amount: number;
  frequency_kind: IncomeFrequency;
  start_on: string;
}

export type EmployerIncome = {
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
} & BaseIncome

export type SelfEmploymentIncome = {
  kind: SelfEmploymentIncome;
} & BaseIncome

export type UnemploymentIncome = {
  kind: UnemploymentIncomeKind;
} & BaseIncome

export type OtherIncome = {
  kind: OtherIncomeKind;
} & BaseIncome

export type Income =
  | EmployerIncome
  | SelfEmploymentIncome
  | UnemploymentIncome
  | OtherIncome;
