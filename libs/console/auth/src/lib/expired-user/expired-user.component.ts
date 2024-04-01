import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpiredUserService } from './expired-user.service';

@Component({
  selector: 'enroll-expired-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expired-user.component.html',
  styleUrls: ['./expired-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpiredUserComponent {
  expiredUserService = inject(ExpiredUserService);
}
