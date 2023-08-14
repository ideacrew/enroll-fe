import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipe', () => {
  let pipe: PhoneNumberPipe;

  beforeEach(() => {
    pipe = new PhoneNumberPipe();
  });

  it('handles a 7 number long phone number', () => {
    expect(pipe.transform('1234567')).toBe('123-4567');
  });

  it('handles a 10 number long phone number', () => {
    expect(pipe.transform('1234567890')).toBe('(123) 456-7890');
  });

  it('handles an 11 number long phone number', () => {
    expect(pipe.transform('12345678901')).toBe('1 (234) 567-8901');
  });
});
