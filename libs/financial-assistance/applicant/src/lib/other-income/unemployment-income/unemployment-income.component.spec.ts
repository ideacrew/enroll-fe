import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnemploymentIncomeComponent } from './unemployment-income.component';

describe('UnemploymentIncomeComponent', () => {
  let component: UnemploymentIncomeComponent;
  let fixture: ComponentFixture<UnemploymentIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnemploymentIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnemploymentIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
