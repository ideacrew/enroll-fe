import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniqueIdPipe } from '../unique-id.pipe';

import { RaceAndEthnicityComponent } from './race-and-ethnicity.component';

describe('RaceAndEthnicityComponent', () => {
  let component: RaceAndEthnicityComponent;
  let fixture: ComponentFixture<RaceAndEthnicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceAndEthnicityComponent, UniqueIdPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceAndEthnicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
