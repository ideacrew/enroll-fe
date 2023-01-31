import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ResidenceFormGroup } from '@enroll/slcsp-calculator/types';

@Component({
  selector: 'enroll-member-absent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './member-absent.component.html',
  styleUrls: ['./member-absent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberAbsentComponent {
  @Input() residenceFormGroup!: FormGroup<ResidenceFormGroup>;
  @Input() memberName!: string;
  @Input() index!: number;
}
