import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defaultHouseholdForm } from '../form-initialization/initial-household-form';

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
    component.parent = defaultHouseholdForm('2022');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
