import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerIncomeComponent } from './employer-income.component';

describe('EmployerIncomeComponent', () => {
  let component: EmployerIncomeComponent;
  let fixture: ComponentFixture<EmployerIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
