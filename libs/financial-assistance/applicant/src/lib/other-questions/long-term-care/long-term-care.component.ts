import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './long-term-care.component.html',
  styleUrls: ['./long-term-care.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LongTermCareComponent {
  isSelfAttestedLongTermCare: boolean | undefined;
}
