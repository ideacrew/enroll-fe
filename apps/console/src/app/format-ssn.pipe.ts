import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSsn',
})
export class FormatSsnPipe implements PipeTransform {
  transform(ssn: string | undefined): string {
    return ssn ? ssn.replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3') : 'No SSN';
  }
}
