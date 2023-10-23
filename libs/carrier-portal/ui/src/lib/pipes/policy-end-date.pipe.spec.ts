import { PolicyEndDatePipe } from './policy-end-date.pipe';

describe('PolicyEndDatePipe', () => {
  let pipe: PolicyEndDatePipe;
  const currentYear = new Date();
  const thisYear = currentYear.toString();
  const futureYear = (currentYear.getFullYear() + 1).toString();
  const previousYear = (currentYear.getFullYear() - 1).toString();

  beforeEach(() => {
    pipe = new PolicyEndDatePipe();
  });

  it('returns an empty string if the current year is equal to the given year', () => {
    const policyStartDate = thisYear;
    expect(pipe.transform(policyStartDate)).toBe('');
  });

  it('returns an empty string if the current year is greater than the given year', () => {
    const policyStartDate = futureYear;
    expect(pipe.transform(policyStartDate)).toBe('');
  });

  it('returns the last day of the year for the given date if the given year is less than the current year', () => {
    // const policyStartDate = '2021-03-01';
    const policyStartDate = previousYear;
    expect(pipe.transform(policyStartDate)).toBe(
      `12/31/${previousYear.substring(2, 4)}`
    );
  });
});
