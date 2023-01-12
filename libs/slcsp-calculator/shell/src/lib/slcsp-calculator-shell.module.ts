import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { slcspCalculatorShellRoutes } from './shell.routes';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(slcspCalculatorShellRoutes)],
  declarations: [ShellComponent],
})
export class SlcspCalculatorShellModule {}
