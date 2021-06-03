import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIncomeComponent } from './job-income.component';

describe('JobIncomeComponent', () => {
  let component: JobIncomeComponent;
  let fixture: ComponentFixture<JobIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
