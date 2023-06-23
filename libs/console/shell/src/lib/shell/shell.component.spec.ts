import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import {
  KeycloakConfigService,
  MockKeycloakConfigService,
  KEYCLOAK_CONFIG,
  MOCK_KEYCLOAK_CONFIG,
  MockKeycloakService,
} from '@enroll/console/auth';

import {
  APPLICATION_NAME,
  MOCK_APPLICATION_CONFIG,
  TENANT_CONFIG,
  MOCK_TENANT_CONFIG,
  MOCK_TENANT_CONFIG_SERVICE,
  TenantConfigService,
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
          provide: KEYCLOAK_CONFIG,
          useValue: MOCK_KEYCLOAK_CONFIG,
        },
        {
          provide: TenantConfigService,
          useClass: MOCK_TENANT_CONFIG_SERVICE,
        },
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
          provide: KeycloakConfigService,
          useClass: MockKeycloakConfigService,
        },
        {
          provide: KeycloakService,
          useClass: MockKeycloakService,
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
