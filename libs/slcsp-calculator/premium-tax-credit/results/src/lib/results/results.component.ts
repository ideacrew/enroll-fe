import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {}
