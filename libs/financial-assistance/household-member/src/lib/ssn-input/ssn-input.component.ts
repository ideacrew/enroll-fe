import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'enroll-ssn-input',
  templateUrl: './ssn-input.component.html',
  styleUrls: ['./ssn-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SsnInputComponent {
  @Input() parent!: FormGroup;
}
