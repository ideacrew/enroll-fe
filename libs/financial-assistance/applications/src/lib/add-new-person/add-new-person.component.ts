import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './add-new-person.component.html',
  styleUrls: ['./add-new-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewPersonComponent {
  firstName!: string;
  needsCoverage: 'yes' | 'no' = 'yes';
  livesWithPrimary: 'yes' | 'no' = 'no';
  citizenOrNational!: 'yes' | 'no';

  get firstNameHasValue(): boolean {
    return this.firstName?.length > 0;
  }
}
