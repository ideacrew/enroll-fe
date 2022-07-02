import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'enroll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() phoneNumber = '';
  @Input() tty = '';

  get fullPhone(): string {
    return this.tty.length > 0
      ? `${this.phoneNumber} / TTY: ${this.tty}`
      : this.phoneNumber;
  }
}
