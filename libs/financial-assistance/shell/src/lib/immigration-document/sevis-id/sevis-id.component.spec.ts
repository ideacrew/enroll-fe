import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevisIdComponent } from './sevis-id.component';

describe('SevisIdComponent', () => {
  let component: SevisIdComponent;
  let fixture: ComponentFixture<SevisIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevisIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevisIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
