import { getAge } from './getAge';

describe('Date to Age transform', () => {
  const today = new Date('June 8, 2021');
  it('Should convert a birth date into an age', () => {
    const birthDate = '1971-01-01';
    expect(getAge(birthDate, today)).toEqual(50);
  });

  it(`Should convert a birth date that very close to today's date`, () => {
    const birthDate = '2000-06-09';
    expect(getAge(birthDate, today)).toEqual(20);
  });

  it(`Should convert a birth date that is just past today's date`, () => {
    const birthDate = '2000-06-08';
    expect(getAge(birthDate, today)).toEqual(21);
  });

  it('Should work with a date being passed in', () => {
    const birthDate = new Date('March 2, 1992');
    expect(getAge(birthDate, today)).toEqual(29);
  });
});
