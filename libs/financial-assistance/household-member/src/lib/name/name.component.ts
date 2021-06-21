import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'enroll-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
