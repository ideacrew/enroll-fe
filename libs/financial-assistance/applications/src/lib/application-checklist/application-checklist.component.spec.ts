import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationChecklistComponent } from './application-checklist.component';

describe('ApplicationChecklistComponent', () => {
  let component: ApplicationChecklistComponent;
  let fixture: ComponentFixture<ApplicationChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationChecklistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
