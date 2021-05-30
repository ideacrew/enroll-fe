import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './applications-list-page.component.html',
  styleUrls: ['./applications-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationsListPageComponent {
  startedOnDate = new Date('2021-05-28');
}
