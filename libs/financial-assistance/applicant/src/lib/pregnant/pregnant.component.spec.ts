import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyComponent } from './pregnancy.component';

describe('PregnancyComponent', () => {
  let component: PregnancyComponent;
  let fixture: ComponentFixture<PregnancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregnancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
