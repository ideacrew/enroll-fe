import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './feature-shell.component.html',
  styleUrls: ['./feature-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureShellComponent {}
