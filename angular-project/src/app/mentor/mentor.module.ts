import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from './mentor.component';
import { MentorTableComponent } from './mentor-table/mentor-table.component';
import { MentorHeaderComponent } from './mentor-header/mentor-header.component';



@NgModule({
  declarations: [
    MentorComponent,
    MentorTableComponent,
    MentorHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MentorComponent,
    MentorTableComponent,
    MentorHeaderComponent
  ]
})
export class MentorModule { }
