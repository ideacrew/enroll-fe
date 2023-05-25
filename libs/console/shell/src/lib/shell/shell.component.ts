import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { PortalDataService } from '@enroll/carrier-portal/data-access';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'enroll-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, TranslocoModule],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  authService = inject(KeycloakService);
  portalDataService = inject(PortalDataService);
  lastUpdatedData$ = this.portalDataService.getLatestUpdateData();

  logout() {
    void this.authService.logout();
  }
}
