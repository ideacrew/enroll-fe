import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicantsFacade } from '@enroll/financial-assistance/store/applicants';

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
          provide: ApplicantsFacade,
          useValue: {
            init: jest.fn(),
          },
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
