import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBillsComponent } from './medical-bills.component';

describe('MedicalBillsComponent', () => {
  let component: MedicalBillsComponent;
  let fixture: ComponentFixture<MedicalBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
