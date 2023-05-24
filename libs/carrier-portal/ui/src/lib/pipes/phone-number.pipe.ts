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
      const top = number.slice(0, 3);
      const rest = number.slice(3, 7);
      return `${top}-${rest}`;
    }
    if (number.length === 10) {
      const ac = number.slice(0, 3);
      const top = number.slice(3, 6);
      const rest = number.slice(6, 10);
      return `(${ac}) ${top}-${rest}`;
    }
    if (number.length === 11) {
      const first = number.slice(0, 1);
      const ac = number.slice(1, 4);
      const top = number.slice(4, 7);
      const rest = number.slice(7, 11);
      return `${first} (${ac}) ${top}-${rest}`;
    }
    return number;
  }
}
