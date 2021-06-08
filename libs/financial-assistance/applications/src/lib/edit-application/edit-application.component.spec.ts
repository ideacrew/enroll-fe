import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteStub } from '../activated-route-stub';
import { EditApplicationComponent } from './edit-application.component';

describe('EditApplicationComponent', () => {
  let component: EditApplicationComponent;
  let fixture: ComponentFixture<EditApplicationComponent>;
  const activatedRoute = new ActivatedRouteStub();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: jest.fn(),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRoute,
        },
      ],
      declarations: [EditApplicationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    activatedRoute.setParamMap({ applicationId: '234908327u4' });
    fixture = TestBed.createComponent(EditApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
