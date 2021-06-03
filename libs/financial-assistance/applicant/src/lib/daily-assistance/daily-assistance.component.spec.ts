import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAssistanceComponent } from './daily-assistance.component';

describe('DailyAssistanceComponent', () => {
  let component: DailyAssistanceComponent;
  let fixture: ComponentFixture<DailyAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyAssistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
