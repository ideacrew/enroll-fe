import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCoverageComponent } from './member-coverage.component';

describe('MemberCoverageComponent', () => {
  let component: MemberCoverageComponent;
  let fixture: ComponentFixture<MemberCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberCoverageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
