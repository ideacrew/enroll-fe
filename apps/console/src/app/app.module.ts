import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RootStoreModule } from '@enroll/shared/state/root-store';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth-interceptor.service';
import { LoginComponent } from './login/login.component';
import { CarrierPortalComponent } from './carrier-portal/carrier-portal.component';
import { AuthGuard } from './auth.guard';
import { MemberCoverageComponent } from './member-coverage/member-coverage.component';
import { MemberPolicyComponent } from './member-policy/member-policy.component';
import { JwtAuthService } from './jwt-auth.service';
import { PortalComponent } from './portal/portal.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { CarrierPortalHomeComponent } from './carrier-portal-home/carrier-portal-home.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { initializeAppFactory } from './config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarrierPortalComponent,
    MemberCoverageComponent,
    MemberPolicyComponent,
    PortalComponent,
    MemberSearchComponent,
    CarrierPortalHomeComponent,
    TransactionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
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
    ]),
    RootStoreModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [HttpClient],
      multi: true,
    },
    JwtAuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
