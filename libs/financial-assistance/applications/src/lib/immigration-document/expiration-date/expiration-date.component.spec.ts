import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirationDateComponent } from './expiration-date.component';

describe('ExpirationDateComponent', () => {
  let component: ExpirationDateComponent;
  let fixture: ComponentFixture<ExpirationDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpirationDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
