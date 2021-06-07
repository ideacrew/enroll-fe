import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEmploymentIncomeComponent } from './self-employment-income.component';

describe('SelfEmploymentIncomeComponent', () => {
  let component: SelfEmploymentIncomeComponent;
  let fixture: ComponentFixture<SelfEmploymentIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfEmploymentIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEmploymentIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
