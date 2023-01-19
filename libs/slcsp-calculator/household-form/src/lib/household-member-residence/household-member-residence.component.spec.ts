import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defaultHouseholdMember } from '../mocks/household-form.mock';

import { HouseholdMemberResidencesComponent } from './household-member-residence.component';

describe('HouseholdMemberResidenceComponent', () => {
  let component: HouseholdMemberResidencesComponent;
  let fixture: ComponentFixture<HouseholdMemberResidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdMemberResidencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseholdMemberResidencesComponent);
    component = fixture.componentInstance;
    component.parent = defaultHouseholdMember();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
