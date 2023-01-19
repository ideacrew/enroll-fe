import { ComponentFixture, TestBed } from '@angular/core/testing';

import { defaultHouseholdForm } from '../form-initialization/initial-household-form';
import { HouseholdCountComponent } from './household-count.component';

describe('HouseholdCountComponent', () => {
  let component: HouseholdCountComponent;
  let fixture: ComponentFixture<HouseholdCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseholdCountComponent);
    component = fixture.componentInstance;
    component.parent = defaultHouseholdForm();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
