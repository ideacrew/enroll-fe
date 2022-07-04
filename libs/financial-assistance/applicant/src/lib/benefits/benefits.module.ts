import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BenefitsRoutingModule } from './benefits-routing.module';
import { HealthCoverageComponent } from './current-health-coverage/health-coverage.component';
import { PotentialCoverageComponent } from './potential-coverage/potential-coverage.component';

@NgModule({
  imports: [CommonModule, BenefitsRoutingModule, FormsModule],
  declarations: [HealthCoverageComponent, PotentialCoverageComponent],
})
export class BenefitsModule {}
