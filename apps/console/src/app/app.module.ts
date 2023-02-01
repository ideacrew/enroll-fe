import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RootStoreModule } from '@enroll/shared/state/root-store';
import {
  APPLICATION_NAME,
  configFactory,
  TenantConfigService,
  TENANT_CONFIG,
} from '@enroll/tenant-config';
import { AuthGuard, AuthInterceptor } from '@enroll/console/auth';

import { AppComponent } from './app.component';
import { CarrierPortalComponent } from './carrier-portal/carrier-portal.component';
import { MemberCoverageComponent } from './member-coverage/member-coverage.component';
import { MemberPolicyComponent } from './member-policy/member-policy.component';
import { PortalComponent } from './portal/portal.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { CarrierPortalHomeComponent } from './carrier-portal-home/carrier-portal-home.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { ParseEdiDataPipe } from './parse-edi-data.pipe';
import { ParseRawDatePipe } from './parse-raw-date.pipe';
import { ParseRawTimePipe } from './parse-raw-time.pipe';
import { SortByDatePipe } from './sort-by-date.pipe';
import { MemberSummaryComponent } from './member-summary/member-summary.component';
import { SortByStatusPipe } from './sort-by-status.pipe';
import { FormatSsnPipe } from './format-ssn.pipe';
import { consoleTenantConfig } from './tenant-config';

@NgModule({
  declarations: [
    AppComponent,
    CarrierPortalComponent,
    MemberCoverageComponent,
    MemberPolicyComponent,
    PortalComponent,
    MemberSearchComponent,
    CarrierPortalHomeComponent,
    TransactionDetailsComponent,
    ParseEdiDataPipe,
    ParseRawDatePipe,
    ParseRawTimePipe,
    SortByDatePipe,
    MemberSummaryComponent,
    SortByStatusPipe,
    FormatSsnPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () =>
          import('@enroll/console/auth').then((m) => m.consoleAuthRoutes),
      },
      {
        path: '',
        component: PortalComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'carrier-portal',
            component: CarrierPortalComponent,
            canActivate: [AuthGuard],
            children: [
              {
                path: 'member-search',
                component: MemberSearchComponent,
              },
              {
                path: 'members/:id',
                component: MemberCoverageComponent,
                canActivate: [AuthGuard],
              },
              // {
              //   path: 'members/:id',
              //   component: MemberSummaryComponent,
              //   canActivate: [AuthGuard],
              // },
              {
                path: 'transactions/:id',
                component: TransactionDetailsComponent,
                canActivate: [AuthGuard],
              },
              {
                path: '',
                component: CarrierPortalHomeComponent,
                canActivate: [AuthGuard],
              },
            ],
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'carrier-portal',
          },
        ],
      },
      {
        path: 'shell',
        loadChildren: () =>
          import('@enroll/console/shell').then((m) => m.consoleShellRoutes),
      },
    ]),
    RootStoreModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [TenantConfigService],
      multi: true,
    },
    {
      provide: APPLICATION_NAME,
      useValue: 'console',
    },
    {
      provide: TENANT_CONFIG,
      useValue: consoleTenantConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
