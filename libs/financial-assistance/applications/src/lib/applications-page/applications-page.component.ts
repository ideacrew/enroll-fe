import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'enroll-applications-page',
  templateUrl: './applications-page.component.html',
  styleUrls: ['./applications-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
