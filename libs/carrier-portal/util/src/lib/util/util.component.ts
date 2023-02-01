import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'enroll-util',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilComponent {}
