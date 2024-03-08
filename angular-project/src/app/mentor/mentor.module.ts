import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from './mentor.component';
import { MentorTableComponent } from './mentor-table/mentor-table.component';
import { MentorHeaderComponent } from './mentor-header/mentor-header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MentorComponent,
    MentorTableComponent,
    MentorHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    MentorComponent,
    MentorTableComponent,
    MentorHeaderComponent
  ]
})
export class MentorModule { }
