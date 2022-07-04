import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlindComponent } from './blind/blind.component';
import { DisabilityComponent } from './disability/disability.component';
import { FosterCareComponent } from './foster-care/foster-care.component';
import { LongTermCareComponent } from './long-term-care/long-term-care.component';
import { MedicalBillsComponent } from './medical-bills/medical-bills.component';
import { PregnantComponent } from './pregnant/pregnant.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: 'pregnant',
    component: PregnantComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'foster-care',
    component: FosterCareComponent,
  },
  {
    path: 'blind',
    component: BlindComponent,
  },
  {
    path: 'daily-assistance',
    component: LongTermCareComponent,
  },
  {
    path: 'medical-bills',
    component: MedicalBillsComponent,
  },
  {
    path: 'disability',
    component: DisabilityComponent,
  },
  { path: '', redirectTo: 'pregnant' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherQuestionsRoutingModule {}
