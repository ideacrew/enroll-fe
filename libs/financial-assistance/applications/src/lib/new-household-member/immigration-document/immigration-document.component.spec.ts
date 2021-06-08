import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHouseholdMemberService } from '../new-household-member.service';
import { ImmigrationDocumentComponent } from './immigration-document.component';

describe('ImmigrationDocumentComponent', () => {
  let component: ImmigrationDocumentComponent;
  let fixture: ComponentFixture<ImmigrationDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [NewHouseholdMemberService],
      declarations: [ImmigrationDocumentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmigrationDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
