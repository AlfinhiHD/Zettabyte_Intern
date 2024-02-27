import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorComponent } from './motor.component';
import { MotorCardComponent } from './motor-card/motor-card.component';
import { MotorBannerComponent } from './motor-banner/motor-banner.component';



@NgModule({
  declarations: [
    MotorComponent,
    MotorCardComponent,
    MotorBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MotorComponent,
    MotorCardComponent,
    MotorBannerComponent
  ]
})
export class MotorModule { }
