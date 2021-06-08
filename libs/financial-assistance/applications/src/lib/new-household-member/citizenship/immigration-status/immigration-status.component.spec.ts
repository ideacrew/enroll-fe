import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmigrationStatusComponent } from './immigration-status.component';

describe('ImmigrationStatusComponent', () => {
  let component: ImmigrationStatusComponent;
  let fixture: ComponentFixture<ImmigrationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmigrationStatusComponent ]
    })
    .compileComponents();
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
