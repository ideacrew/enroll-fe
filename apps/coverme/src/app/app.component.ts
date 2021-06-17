import { Component } from '@angular/core';
import { TitleService } from '@enroll/shared/title';

@Component({
  selector: 'coverme-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private titleService: TitleService) {}
}
