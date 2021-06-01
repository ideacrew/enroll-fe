import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I94NumberComponent } from './i94-number.component';

describe('I94NumberComponent', () => {
  let component: I94NumberComponent;
  let fixture: ComponentFixture<I94NumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I94NumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I94NumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
