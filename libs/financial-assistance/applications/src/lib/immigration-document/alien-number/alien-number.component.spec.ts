import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienNumberComponent } from './alien-number.component';

describe('AlienNumberComponent', () => {
  let component: AlienNumberComponent;
  let fixture: ComponentFixture<AlienNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlienNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
