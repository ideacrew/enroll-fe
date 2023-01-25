import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defaultHouseholdMember } from '../form-initialization/initial-household-form';

import { HouseholdMemberNameComponent } from './household-member-name.component';

describe('HouseholdMemberNameComponent', () => {
  let component: HouseholdMemberNameComponent;
  let fixture: ComponentFixture<HouseholdMemberNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdMemberNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseholdMemberNameComponent);
    component = fixture.componentInstance;
    component.householdMember = defaultHouseholdMember();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
