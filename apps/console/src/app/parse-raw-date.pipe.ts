import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseRawDate',
})
export class ParseRawDatePipe implements PipeTransform {
  // raw date comes in form 20200725, need to convert to date
  transform(rawDate: string): Date {
    const year = rawDate.slice(0, 4);
    const month = rawDate.slice(4, 6);
    const day = rawDate.slice(6, 8);

    return new Date(`${month}/${day}/${year}`);
  }
}
