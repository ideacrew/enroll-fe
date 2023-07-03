import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter as EventTarget,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HouseholdFormGroup } from '@enroll/slcsp-calculator/types';

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

  @Output() newHouseholdCount: EventTarget<number> = new EventTarget<number>();

  get householdCount(): number {
    return this.parent.get('householdCount')?.value ?? 0;
  }

  changeHouseholdCount(): void {
    this.newHouseholdCount.emit(this.householdCount);
  }
}
