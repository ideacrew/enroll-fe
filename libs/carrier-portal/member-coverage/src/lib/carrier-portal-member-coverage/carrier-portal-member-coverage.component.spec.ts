import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierPortalMemberCoverageComponent } from './carrier-portal-member-coverage.component';

describe('CarrierPortalMemberCoverageComponent', () => {
  let component: CarrierPortalMemberCoverageComponent;
  let fixture: ComponentFixture<CarrierPortalMemberCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrierPortalMemberCoverageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrierPortalMemberCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
