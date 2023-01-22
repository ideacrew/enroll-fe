import { Pipe, PipeTransform } from '@angular/core';
import { Month } from '../interfaces';

@Pipe({
  name: 'residenceMonths',
  standalone: true,
})
export class ResidenceMonthsPipe implements PipeTransform {
  transform(value: Record<Month, boolean>): Month[] | 'All year' {
    const trueMonths = Object.keys(value).filter(
      (month) => value[month as Month] === true
    ) as Month[];

    return trueMonths.length === 12 ? 'All year' : trueMonths;
  }
}
