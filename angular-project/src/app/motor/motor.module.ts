import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorComponent } from './motor.component';
import { MotorCardComponent } from './motor-card/motor-card.component';
import { MotorBannerComponent } from './motor-banner/motor-banner.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MotorComponent,
    MotorCardComponent,
    MotorBannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MotorComponent,
    MotorCardComponent,
    MotorBannerComponent
  ]
})
export class MotorModule { }
