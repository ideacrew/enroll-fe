import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'enroll-expiration-date',
  templateUrl: './expiration-date.component.html',
  styleUrls: ['./expiration-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpirationDateComponent {
  private _label!: string;

  @Input()
  get label(): string {
    return this._label;
  }
  set label(label: string) {
    this._label = `${label} Expiration Date`;
  }
}
