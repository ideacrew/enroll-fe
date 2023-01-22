import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defaultHouseholdMember } from '../form-initialization/initial-household-form';

import { HouseholdMemberComponent } from './household-member.component';

describe('HouseholdMemberComponent', () => {
  let component: HouseholdMemberComponent;
  let fixture: ComponentFixture<HouseholdMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdMemberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseholdMemberComponent);
    component = fixture.componentInstance;
    component.householdMemberFormGroup = defaultHouseholdMember();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
