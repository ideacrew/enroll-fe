import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialCoverageComponent } from './potential-coverage.component';

describe('PotentialCoverageComponent', () => {
  let component: PotentialCoverageComponent;
  let fixture: ComponentFixture<PotentialCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotentialCoverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
