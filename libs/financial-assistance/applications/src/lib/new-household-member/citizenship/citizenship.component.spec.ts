import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenshipComponent } from './citizenship.component';

describe('CitizenshipComponent', () => {
  let component: CitizenshipComponent;
  let fixture: ComponentFixture<CitizenshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
