import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHouseholdMemberService } from '../new-household-member.service';
import { BasicInformationComponent } from './basic-information.component';

describe('BasicInformationComponent', () => {
  let component: BasicInformationComponent;
  let fixture: ComponentFixture<BasicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [NewHouseholdMemberService],
      declarations: [BasicInformationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
