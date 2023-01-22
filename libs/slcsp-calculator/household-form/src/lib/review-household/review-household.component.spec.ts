import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defaultHouseholdForm } from '../form-initialization/initial-household-form';

import { ReviewHouseholdComponent } from './review-household.component';

describe('ReviewHouseholdComponent', () => {
  let component: ReviewHouseholdComponent;
  let fixture: ComponentFixture<ReviewHouseholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewHouseholdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewHouseholdComponent);
    component = fixture.componentInstance;
    component.householdForm = defaultHouseholdForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});