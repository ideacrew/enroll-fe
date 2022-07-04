import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherIncomeSourcesComponent } from './other-income-sources.component';

describe('OtherIncomeSourcesComponent', () => {
  let component: OtherIncomeSourcesComponent;
  let fixture: ComponentFixture<OtherIncomeSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherIncomeSourcesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherIncomeSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
