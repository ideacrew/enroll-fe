/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'enroll-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameFormComponent {
  @Input() parent!: FormGroup;
}
