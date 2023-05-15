import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
  standalone: true,
})
export class PhoneNumberPipe implements PipeTransform {
  transform(phoneNumber: string | undefined | null): string {
    return phoneNumber ? this.formatPhoneNumber(phoneNumber) : 'No Number';
  }

  private formatPhoneNumber(number: string) {
    if (number.length === 7) {
      const top = number.slice(0, 2);
      const rest = number.slice(3, 6);
      return `${top}-${rest}`;
    }
    if (number.length === 10) {
      const ac = number.slice(0, 2);
      const top = number.slice(3, 5);
      const rest = number.slice(6, 9);
      return `(${ac}) ${top}-${rest}`;
    }
    return number;
  }
}
