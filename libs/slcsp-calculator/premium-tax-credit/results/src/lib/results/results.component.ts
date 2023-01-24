import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { HouseholdService } from '@enroll/slcsp-calculator/household-form';

@Component({
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit {
  householdService = inject(HouseholdService);

  ngOnInit(): void {
    console.log(this.householdService.householdForm.value);
  }
}
