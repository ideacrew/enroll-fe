import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'enroll-carrier-portal',
  templateUrl: './carrier-portal.component.html',
  styleUrls: ['./carrier-portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrierPortalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
