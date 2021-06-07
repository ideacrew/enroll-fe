import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCoverageComponent } from './current-health-coverage/health-coverage.component';
import { PotentialCoverageComponent } from './potential-coverage/potential-coverage.component';

const routes: Routes = [
  {
    path: 'currently-enrolled',
    component: HealthCoverageComponent,
  },
  {
    path: 'potential-coverage',
    component: PotentialCoverageComponent,
  },
  {
    path: '',
    redirectTo: 'currently-enrolled',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenefitsRoutingModule {}
