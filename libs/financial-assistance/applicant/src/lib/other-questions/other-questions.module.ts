import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OtherQuestionsRoutingModule } from './other-questions-routing.module';
import { BlindComponent } from './blind/blind.component';
import { FosterCareComponent } from './foster-care/foster-care.component';
import { LongTermCareComponent } from './long-term-care/long-term-care.component';
import { MedicalBillsComponent } from './medical-bills/medical-bills.component';
import { PregnantComponent } from './pregnant/pregnant.component';
import { StudentComponent } from './student/student.component';
import { DisabilityComponent } from './disability/disability.component';

@NgModule({
  imports: [CommonModule, OtherQuestionsRoutingModule, FormsModule],
  declarations: [
    BlindComponent,
    FosterCareComponent,
    LongTermCareComponent,
    MedicalBillsComponent,
    PregnantComponent,
    StudentComponent,
    DisabilityComponent,
  ],
})
export class OtherQuestionsModule {}
