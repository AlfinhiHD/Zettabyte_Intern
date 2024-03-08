import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from './mentor.component';
import { MentorTableComponent } from './mentor-table/mentor-table.component';
import { MentorHeaderComponent } from './mentor-header/mentor-header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    MentorComponent,
    MentorTableComponent,
    MentorHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MentorComponent,
    MentorTableComponent,
    MentorHeaderComponent
  ]
})
export class MentorModule { }
