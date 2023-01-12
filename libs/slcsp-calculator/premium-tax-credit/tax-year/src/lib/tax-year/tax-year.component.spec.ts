import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxYearComponent } from './tax-year.component';

describe('TaxYearComponent', () => {
  let component: TaxYearComponent;
  let fixture: ComponentFixture<TaxYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxYearComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
