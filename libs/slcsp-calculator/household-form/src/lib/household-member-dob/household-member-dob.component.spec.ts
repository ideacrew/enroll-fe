import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defaultHouseholdMember } from '../form-initialization/initial-household-form';

import { HouseholdMemberDobComponent } from './household-member-dob.component';

describe('HouseholdMemberDobComponent', () => {
  let component: HouseholdMemberDobComponent;
  let fixture: ComponentFixture<HouseholdMemberDobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdMemberDobComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseholdMemberDobComponent);
    component = fixture.componentInstance;
    component.parent = defaultHouseholdMember();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
