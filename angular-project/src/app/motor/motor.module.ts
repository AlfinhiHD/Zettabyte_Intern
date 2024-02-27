import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorComponent } from './motor.component';
import { MotorCardComponent } from './motor-card/motor-card.component';
import { MotorBannerComponent } from './motor-banner/motor-banner.component';
import { FormsModule } from '@angular/forms';
import { MotorAddformComponent } from './motor-addform/motor-addform.component';



@NgModule({
  declarations: [
    MotorComponent,
    MotorCardComponent,
    MotorBannerComponent,
    MotorAddformComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MotorComponent,
    MotorCardComponent,
    MotorBannerComponent,
    MotorAddformComponent
  ]
})
export class MotorModule { }
