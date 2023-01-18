import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
