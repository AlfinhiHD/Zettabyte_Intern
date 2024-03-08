import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedmentorComponent } from './selectedmentor.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: SelectedmentorComponent},
];


@NgModule({
  declarations: [
    SelectedmentorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    SelectedmentorComponent
  ]
})
export class SelectedmentorModule { }
