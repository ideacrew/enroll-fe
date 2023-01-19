import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createResidenceFormGroup } from '../form-initialization/initial-household-form';

import { MemberResidenceMonthsComponent } from './member-residence-months.component';

describe('MemberResidenceMonthsComponent', () => {
  let component: MemberResidenceMonthsComponent;
  let fixture: ComponentFixture<MemberResidenceMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberResidenceMonthsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberResidenceMonthsComponent);
    component = fixture.componentInstance;
    component.residenceFormGroup = createResidenceFormGroup();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
