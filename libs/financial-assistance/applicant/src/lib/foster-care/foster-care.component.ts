/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FosterCareInformation } from '@enroll/financial-assistance/entities';

@Component({
  templateUrl: './foster-care.component.html',
  styleUrls: ['./foster-care.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FosterCareComponent {
  fosterCare: FosterCareInformation = {
    is_former_foster_care: undefined,
  };
}
