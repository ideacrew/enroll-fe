import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampDateComponent } from './stamp-date.component';

describe('StampDateComponent', () => {
  let component: StampDateComponent;
  let fixture: ComponentFixture<StampDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StampDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StampDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
