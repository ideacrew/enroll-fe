import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdComponent } from './household.component';

describe('HouseholdComponent', () => {
  let component: HouseholdComponent;
  let fixture: ComponentFixture<HouseholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseholdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
