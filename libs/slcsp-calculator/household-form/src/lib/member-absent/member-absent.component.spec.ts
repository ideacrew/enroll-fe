import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAbsentComponent } from './member-absent.component';

describe('MemberAbsentComponent', () => {
  let component: MemberAbsentComponent;
  let fixture: ComponentFixture<MemberAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberAbsentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
