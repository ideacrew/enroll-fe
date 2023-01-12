export const magiMedicaidCategory = [
  'none',
  'adult_group',
  'child',
  'chip_targeted_low_income_child',
  'optional_targeted_low_income_child',
  'parent_caretaker',
  'pregnancy',
  'unborn_child',
] as const;

export type MagiMedicaidCategory = (typeof magiMedicaidCategory)[number];
