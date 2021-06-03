import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StudentInformation } from '@enroll/financial-assistance/entities';

@Component({
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentComponent {
  student: StudentInformation = {
    isStudent: undefined,
  };
}
