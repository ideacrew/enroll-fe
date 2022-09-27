import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseRawTime',
})
export class ParseRawTimePipe implements PipeTransform {
  // raw time comes in form 205708, need to convert to time
  transform(rawTime: string): string {
    const hours = rawTime.slice(0, 2);
    const minutes = rawTime.slice(2, 4);
    const seconds = rawTime.slice(4, 6);

    const time = `${hours}:${minutes}:${seconds}`;

    // convert to 12 hour time
    const time12 = new Date(`1/1/2000 ${time}`).toLocaleTimeString('en-US', {});

    return time12;
  }
}
