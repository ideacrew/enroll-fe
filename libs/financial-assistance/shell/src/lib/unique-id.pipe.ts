import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueId',
})
export class UniqueIdPipe implements PipeTransform {
  transform(value: string): string {
    // Convert these lines into a pure function for testing
    const trimmed = value.trim();
    const lowerCase = trimmed.toLocaleLowerCase();
    const slug = lowerCase.replace(/\s+/g, '-');

    return slug;
  }
}
