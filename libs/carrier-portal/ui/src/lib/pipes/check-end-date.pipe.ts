import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkEndDate',
  standalone: true,
})
export class CheckEndDatePipe implements PipeTransform {
  transform(x: string | null) {
    // Check if x is null
    if (x === null) {
      return;
    }
    // Check if x year is less than current year
    const currentYear = new Date().getFullYear().toString().slice(-2);
    const xYear = x.slice(-2);

    if (xYear < currentYear) {
      return `12/31/${xYear}`;
    }

    console.log(currentYear);
    return '';
  }
}
