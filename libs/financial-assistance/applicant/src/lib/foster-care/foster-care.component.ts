import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FosterCareInformation } from '@enroll/financial-assistance/entities';

@Component({
  templateUrl: './foster-care.component.html',
  styleUrls: ['./foster-care.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FosterCareComponent {
  fosterCare: FosterCareInformation = {
    isFormerFosterCare: undefined,
  };
}
