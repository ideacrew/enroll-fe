import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseEdiData',
})
export class ParseEdiDataPipe implements PipeTransform {
  transform(rawData: string): string {
    const separator = '~';

    const data = rawData.replaceAll(separator, '\n');

    return data;
  }
}
