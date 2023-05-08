import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { mockLoggedInKeycloakService } from '@enroll/console/auth';

import {
  APPLICATION_NAME,
  MOCK_APPLICATION_CONFIG,
  TENANT_CONFIG,
  MOCK_TENANT_CONFIG,
} from '@enroll/tenant-config';
import { ActivatedRouteStub } from '@enroll/testing';

import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellComponent],
      providers: [
        {
          provide: APPLICATION_NAME,
          useValue: MOCK_APPLICATION_CONFIG,
        },
        {
          provide: TENANT_CONFIG,
          useValue: MOCK_TENANT_CONFIG,
        },
        {
          provide: ActivatedRoute,
          useValue: new ActivatedRouteStub({ id: '123' }),
        },
        {
          provide: KeycloakService,
          useValue: mockLoggedInKeycloakService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
