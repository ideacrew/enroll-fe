import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'enroll-gender-input',
  templateUrl: './gender-input.component.html',
  styleUrls: ['./gender-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenderInputComponent {
  @Input() parent!: FormGroup;
}
