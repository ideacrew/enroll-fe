import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInfoComponent } from './tax-info.component';

describe('TaxInfoComponent', () => {
  let component: TaxInfoComponent;
  let fixture: ComponentFixture<TaxInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
