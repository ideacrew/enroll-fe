import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'enroll-footer',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() phoneNumber = '';
  @Input() email = '';
  @Input() tty = '';
  @Input() helpLink = '';

  get fullPhone(): string {
    return this.tty.length > 0
      ? `${this.phoneNumber} / TTY: ${this.tty}`
      : this.phoneNumber;
  }

  currentYear = new Date().getFullYear();
}
