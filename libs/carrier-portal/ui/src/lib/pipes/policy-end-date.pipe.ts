/* eslint-disable @typescript-eslint/naming-convention */
import { Pipe, PipeTransform } from '@angular/core';

type DateString = string;

@Pipe({
  name: 'policyEndDate',
  standalone: true,
})
export class PolicyEndDatePipe implements PipeTransform {
  transform(value: DateString) {
    const policyStartYear = value.substring(2, 4);
    const currentYear = new Date().getFullYear().toString().substring(2, 4);

    return policyStartYear < currentYear ? `12/31/${policyStartYear}` : '';
  }
}
