import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createResidenceFormGroup } from '../form-initialization/initial-household-form';

import { MemberAbsentComponent } from './member-absent.component';

describe('MemberAbsentComponent', () => {
  let component: MemberAbsentComponent;
  let fixture: ComponentFixture<MemberAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberAbsentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberAbsentComponent);
    component = fixture.componentInstance;
    component.index = 0;
    component.memberName = 'Test';
    component.residenceFormGroup = createResidenceFormGroup();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
