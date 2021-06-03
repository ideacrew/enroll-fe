import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingTaxesComponent } from './filing-taxes.component';

describe('FilingTaxesComponent', () => {
  let component: FilingTaxesComponent;
  let fixture: ComponentFixture<FilingTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilingTaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
