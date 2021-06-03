import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './disability.component.html',
  styleUrls: ['./disability.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabilityComponent {
  isSelfAttestedDisabled: boolean | undefined;
}
