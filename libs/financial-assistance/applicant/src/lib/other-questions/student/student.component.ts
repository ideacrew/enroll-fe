/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StudentInformation } from '@enroll/financial-assistance/entities';

@Component({
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentComponent {
  student: StudentInformation = {
    is_student: undefined,
  };
}
