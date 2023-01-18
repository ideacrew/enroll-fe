import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HouseholdFormGroup } from '../interfaces/form-types';

@Component({
  selector: 'enroll-household-count',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './household-count.component.html',
  styleUrls: ['./household-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdCountComponent {
  @Input() parent!: FormGroup<HouseholdFormGroup>;

  @Output() newHouseholdCount: EventEmitter<number> =
    new EventEmitter<number>();

  get householdCount(): number {
    return this.parent.get('householdCount')?.value ?? 0;
  }

  changeHouseholdCount(): void {
    this.newHouseholdCount.emit(this.householdCount);
  }
}
