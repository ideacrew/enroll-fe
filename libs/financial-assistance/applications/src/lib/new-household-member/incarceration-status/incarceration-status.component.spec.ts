import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncarcerationStatusComponent } from './incarceration-status.component';

describe('IncarcerationStatusComponent', () => {
  let component: IncarcerationStatusComponent;
  let fixture: ComponentFixture<IncarcerationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncarcerationStatusComponent ]
    })
    .compileComponents();
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
