import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import {
  HouseholdService,
  months,
} from '@enroll/slcsp-calculator/household-form';

@Component({
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit {
  householdService = inject(HouseholdService);
  monthList = months;

  slcspPremiums = {
    jan: 965.35,
    feb: 965.35,
    mar: 965.35,
    apr: 965.35,
    may: 965.35,
    jun: 965.35,
    jul: 965.35,
    aug: 965.35,
    sep: 965.35,
    oct: 965.35,
    nov: 965.35,
    dec: 965.35,
  };

  ngOnInit(): void {
    console.log(this.householdService.householdForm.value);
  }

  print(): void {
    window.print();
  }
}
