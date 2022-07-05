import { differenceInYears } from 'date-fns';

export const getAge = (
  birthDateString: string | Date,
  today = new Date()
): number => {
  const birthDate =
    typeof birthDateString === 'string'
      ? new Date(birthDateString)
      : birthDateString;

  return differenceInYears(today, birthDate);
};
