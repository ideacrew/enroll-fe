import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHouseholdMemberService } from '../new-household-member.service';
import { IncarcerationStatusComponent } from './incarceration-status.component';

describe('IncarcerationStatusComponent', () => {
  let component: IncarcerationStatusComponent;
  let fixture: ComponentFixture<IncarcerationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [NewHouseholdMemberService],
      declarations: [IncarcerationStatusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncarcerationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
