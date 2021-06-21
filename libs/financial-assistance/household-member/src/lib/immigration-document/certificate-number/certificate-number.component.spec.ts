import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateNumberComponent } from './certificate-number.component';

describe('CertificateNumberComponent', () => {
  let component: CertificateNumberComponent;
  let fixture: ComponentFixture<CertificateNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
