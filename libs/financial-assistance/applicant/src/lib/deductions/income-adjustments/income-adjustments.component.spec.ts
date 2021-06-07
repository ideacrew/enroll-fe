import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeAdjustmentsComponent } from './income-adjustments.component';

describe('IncomeAdjustmentsComponent', () => {
  let component: IncomeAdjustmentsComponent;
  let fixture: ComponentFixture<IncomeAdjustmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeAdjustmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
