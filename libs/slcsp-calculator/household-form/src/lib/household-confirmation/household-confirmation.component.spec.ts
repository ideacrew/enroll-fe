import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defaultHouseholdForm } from '../mocks/household-form.mock';

import { HouseholdConfirmationComponent } from './household-confirmation.component';

describe('HouseholdConfirmationComponent', () => {
  let component: HouseholdConfirmationComponent;
  let fixture: ComponentFixture<HouseholdConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdConfirmationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseholdConfirmationComponent);
    component = fixture.componentInstance;
    component.parent = defaultHouseholdForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
