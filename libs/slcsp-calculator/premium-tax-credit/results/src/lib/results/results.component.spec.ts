import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { APPLICATION_NAME, TENANT_CONFIG } from '@enroll/tenant-config';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ResultsComponent],
      providers: [
        { provide: APPLICATION_NAME, useValue: 'slcsp-calculator' },
        {
          provide: TENANT_CONFIG,
          useValue: [
            {
              application: 'slcsp-calculator',
              baseApiUrl: '',
              host: 'localhost',
              tenant: 'me',
            },
          ],
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
