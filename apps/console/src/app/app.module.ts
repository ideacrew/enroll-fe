import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RootStoreModule } from '@enroll/shared/state/root-store';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth-interceptor.service';
import { LoginComponent } from './login/login.component';
import { CarrierPortalComponent } from './carrier-portal/carrier-portal.component';
import { AuthGuard } from './auth.guard';
import { PersonCoverageComponent } from './person-coverage/person-coverage.component';
import { MemberPolicyComponent } from './person-coverage/member-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarrierPortalComponent,
    PersonCoverageComponent,
    MemberPolicyComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'carrier-portal',
        pathMatch: 'full',
      },
      {
        path: 'carrier-portal',
        component: CarrierPortalComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'people/:id',
        component: PersonCoverageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ]),
    RootStoreModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
