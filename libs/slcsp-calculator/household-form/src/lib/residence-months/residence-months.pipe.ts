import { Pipe, PipeTransform } from '@angular/core';

import { Month } from '@enroll/shared/types';

@Pipe({
  name: 'residenceMonths',
  standalone: true,
})
export class ResidenceMonthsPipe implements PipeTransform {
  transform(value: Record<Month, boolean>): string {
    const trueMonths: Month[] = Object.keys(value).filter(
      (month) => value[month as Month] === true
    ) as Month[];

    if (trueMonths.length === 12) {
      return 'All year';
    } else {
      // Capitalize each month name
      const capitalMonths: string[] = trueMonths.map(
        (month: Month) => month[0].toUpperCase() + month.slice(1)
      );

      // Return array as comma-separated string
      return capitalMonths.join(', ');
    }
  }
}
