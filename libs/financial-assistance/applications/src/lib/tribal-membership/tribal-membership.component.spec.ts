import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TribalMembershipComponent } from './tribal-membership.component';

describe('TribalMembershipComponent', () => {
  let component: TribalMembershipComponent;
  let fixture: ComponentFixture<TribalMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TribalMembershipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TribalMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
