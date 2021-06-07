import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCoverageComponent } from './health-coverage.component';

describe('HealthCoverageComponent', () => {
  let component: HealthCoverageComponent;
  let fixture: ComponentFixture<HealthCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCoverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
