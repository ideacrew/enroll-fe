import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createResidenceFormGroup } from '../form-initialization/initial-household-form';

import { MemberResidenceZipcodeComponent } from './member-residence-zipcode.component';

describe('MemberResidenceZipcodeComponent', () => {
  let component: MemberResidenceZipcodeComponent;
  let fixture: ComponentFixture<MemberResidenceZipcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberResidenceZipcodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberResidenceZipcodeComponent);
    component = fixture.componentInstance;
    component.residenceFormGroup = createResidenceFormGroup();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
