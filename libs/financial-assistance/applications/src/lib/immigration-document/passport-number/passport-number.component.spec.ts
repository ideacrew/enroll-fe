import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportNumberComponent } from './passport-number.component';

describe('PassportNumberComponent', () => {
  let component: PassportNumberComponent;
  let fixture: ComponentFixture<PassportNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
