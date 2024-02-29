import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DpoFormComponent } from './dpo-form/dpo-form.component';
import { SelecteddpoComponent } from './selecteddpo.component';
import { DpoDetailComponent } from './dpo-detail/dpo-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'detail/:id', component: SelecteddpoComponent},
  { path: 'inputform', component: DpoFormComponent},
];

@NgModule({
  declarations: [
    DpoFormComponent,
    SelecteddpoComponent,
    DpoDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DpoFormComponent,
    SelecteddpoComponent,
    DpoDetailComponent
  ]
})
export class SelecteddpoModule { }
