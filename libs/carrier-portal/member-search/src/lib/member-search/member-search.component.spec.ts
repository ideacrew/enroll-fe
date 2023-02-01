import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import {
  APPLICATION_NAME,
  MOCK_APPLICATION_CONFIG,
  TENANT_CONFIG,
  MOCK_TENANT_CONFIG,
} from '@enroll/tenant-config';
import { ActivatedRouteStub } from '@enroll/testing';

import { MemberSearchComponent } from './member-search.component';

describe('MemberSearchComponent', () => {
  let component: MemberSearchComponent;
  let fixture: ComponentFixture<MemberSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberSearchComponent],
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

    fixture = TestBed.createComponent(MemberSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
