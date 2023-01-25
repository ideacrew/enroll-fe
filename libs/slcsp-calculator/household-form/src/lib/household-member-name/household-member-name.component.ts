import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  Translation,
  TranslocoModule,
  TRANSLOCO_SCOPE,
} from '@ngneat/transloco';

import { TaxRelationships } from '@enroll/shared/types';

import { HouseholdMemberFormGroup } from '../interfaces/form-types';
import { scopeLoader } from '../util/i18n/standalone-loader';

@Component({
  selector: 'enroll-household-member-name',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
  templateUrl: './household-member-name.component.html',
  styleUrls: ['./household-member-name.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'relationships',
        loader: scopeLoader(
          (lang: string, root: string) =>
            import(`./${root}/${lang}.json`) as Promise<Translation>
        ),
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdMemberNameComponent {
  @Input() householdMember!: FormGroup<HouseholdMemberFormGroup>;
  @Input() index!: number;
  @Input() primaryMemberName!: string;

  taxRelationships = TaxRelationships;

  get primaryMember(): boolean {
    const primaryMemberControl = this.householdMember.get('primaryMember');

    if (primaryMemberControl) {
      return primaryMemberControl.value;
    } else {
      throw new Error('primaryMember control is missing');
    }
  }
}
