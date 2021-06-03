import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDependentComponent } from './tax-dependent.component';

describe('TaxDependentComponent', () => {
  let component: TaxDependentComponent;
  let fixture: ComponentFixture<TaxDependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxDependentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
