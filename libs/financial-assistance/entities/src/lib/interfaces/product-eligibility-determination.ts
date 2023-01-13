/* eslint-disable @typescript-eslint/naming-convention */
export type ProductEligibilityDetermination = {
  is_ia_eligible?: boolean;
  is_medicaid_chip_eligible?: boolean;
  is_non_magi_medicaid_eligible?: boolean;
  is_totally_ineligible?: boolean;
  is_without_assistance?: boolean;
  is_magi_medicaid?: boolean;
  magi_medicaid_monthly_household_income?: number;
  medicaid_household_size?: number;
  magi_medicaid_monthly_income_limit?: number;
  magi_as_percentage_of_fpl?: number;
  magi_medicaid_category?: boolean;
}
