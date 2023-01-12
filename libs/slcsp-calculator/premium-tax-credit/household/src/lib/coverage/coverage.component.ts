import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoverageComponent {}
