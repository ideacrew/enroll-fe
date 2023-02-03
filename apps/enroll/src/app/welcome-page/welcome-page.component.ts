import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

import { WelcomeComponent } from '@enroll/ui/base/shell';

@Component({
  standalone: true,
  imports: [TranslocoModule, WelcomeComponent],
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent {}
