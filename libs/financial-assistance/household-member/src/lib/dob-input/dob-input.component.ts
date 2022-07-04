import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'enroll-dob-input',
  templateUrl: './dob-input.component.html',
  styleUrls: ['./dob-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DobInputComponent {
  @Input() parent!: FormGroup;
}
