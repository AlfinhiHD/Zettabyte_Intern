import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorFormComponent } from './mentor-form.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: MentorFormComponent},
];


@NgModule({
  declarations: [
    MentorFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
    
  ],
  exports: [
    MentorFormComponent
  ]
})
export class MentorFormModule { }
