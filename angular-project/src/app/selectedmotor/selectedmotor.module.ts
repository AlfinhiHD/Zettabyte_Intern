import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedmotorComponent } from './selectedmotor.component';
import { MotorDetailComponent } from './motor-detail/motor-detail.component';



@NgModule({
  declarations: [
    SelectedmotorComponent,
    MotorDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectedmotorComponent,
    MotorDetailComponent
  ]
})
export class SelectedmotorModule { }
