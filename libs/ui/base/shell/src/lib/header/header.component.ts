import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'enroll-header',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() phoneNumber = '';
  @Input() tty = '';
  @Input() tenant = 'me';

  get fullPhone(): string {
    return this.tty.length > 0
      ? `${this.phoneNumber} / TTY: ${this.tty}`
      : this.phoneNumber;
  }
}
