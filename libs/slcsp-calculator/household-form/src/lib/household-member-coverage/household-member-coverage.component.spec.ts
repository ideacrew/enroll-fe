import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defaultHouseholdMember } from '../form-initialization/initial-household-form';

import { HouseholdMemberCoverageComponent } from './household-member-coverage.component';

describe('HouseholdMemberCoverageComponent', () => {
  let component: HouseholdMemberCoverageComponent;
  let fixture: ComponentFixture<HouseholdMemberCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdMemberCoverageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseholdMemberCoverageComponent);
    component = fixture.componentInstance;
    component.memberFormGroup = defaultHouseholdMember();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
