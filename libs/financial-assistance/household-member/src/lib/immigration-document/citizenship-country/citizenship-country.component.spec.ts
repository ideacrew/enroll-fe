import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenshipCountryComponent } from './citizenship-country.component';

describe('CitizenshipCountryComponent', () => {
  let component: CitizenshipCountryComponent;
  let fixture: ComponentFixture<CitizenshipCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenshipCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenshipCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
