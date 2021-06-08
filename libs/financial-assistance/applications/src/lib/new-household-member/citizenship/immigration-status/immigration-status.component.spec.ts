import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHouseholdMemberService } from '../../new-household-member.service';
import { ImmigrationStatusComponent } from './immigration-status.component';

describe('ImmigrationStatusComponent', () => {
  let component: ImmigrationStatusComponent;
  let fixture: ComponentFixture<ImmigrationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [NewHouseholdMemberService],
      declarations: [ImmigrationStatusComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmigrationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
