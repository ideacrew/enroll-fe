import { ComponentFixture, TestBed } from '@angular/core/testing';

import { defaultHouseholdForm } from '../form-initialization/initial-household-form';
import { ReviewTaxYearComponent } from './review-tax-year.component';

describe('ReviewTaxYearComponent', () => {
  let component: ReviewTaxYearComponent;
  let fixture: ComponentFixture<ReviewTaxYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewTaxYearComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewTaxYearComponent);
    component = fixture.componentInstance;
    component.householdForm = defaultHouseholdForm('2022');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
