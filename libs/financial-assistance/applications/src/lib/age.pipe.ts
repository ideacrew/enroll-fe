import { Pipe, PipeTransform } from '@angular/core';
import { getAge } from '@enroll/util/transforms';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: string | Date): number {
    return getAge(value);
  }
}
