import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherIncomeComponent } from './other-income.component';

describe('OtherIncomeComponent', () => {
  let component: OtherIncomeComponent;
  let fixture: ComponentFixture<OtherIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
