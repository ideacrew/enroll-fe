import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaNumberComponent } from './visa-number.component';

describe('VisaNumberComponent', () => {
  let component: VisaNumberComponent;
  let fixture: ComponentFixture<VisaNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
