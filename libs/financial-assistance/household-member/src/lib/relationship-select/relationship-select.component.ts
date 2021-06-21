import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { relationships } from '@enroll/financial-assistance/entities';

@Component({
  selector: 'enroll-relationship-select',
  templateUrl: './relationship-select.component.html',
  styleUrls: ['./relationship-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelationshipSelectComponent {
  relationships = relationships;
  @Input() parent!: FormGroup;
}
