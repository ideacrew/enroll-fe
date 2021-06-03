import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PregnancyInformation } from '@enroll/financial-assistance/entities';

@Component({
  templateUrl: './pregnant.component.html',
  styleUrls: ['./pregnant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PregnantComponent {
  pregnant: PregnancyInformation = {
    isPregnant: false,
  };
}
