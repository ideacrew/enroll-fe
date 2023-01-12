import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HouseholdService } from './household.service';

describe('HouseholdService', () => {
  let service: HouseholdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    });
    service = TestBed.inject(HouseholdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
