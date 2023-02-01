import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import {
  APPLICATION_NAME,
  MOCK_APPLICATION_CONFIG,
  TENANT_CONFIG,
  MOCK_TENANT_CONFIG,
} from '@enroll/tenant-config';
import { ActivatedRouteStub } from '@enroll/testing';

import { MemberCoverageComponent } from './member-coverage.component';

describe('MemberCoverageComponent', () => {
  let component: MemberCoverageComponent;
  let fixture: ComponentFixture<MemberCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberCoverageComponent],
      providers: [
        {
          provide: APPLICATION_NAME,
          useValue: MOCK_APPLICATION_CONFIG,
        },
        {
          provide: TENANT_CONFIG,
          useValue: MOCK_TENANT_CONFIG,
        },
        {
          provide: ActivatedRoute,
          useValue: new ActivatedRouteStub({ id: '123' }),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
