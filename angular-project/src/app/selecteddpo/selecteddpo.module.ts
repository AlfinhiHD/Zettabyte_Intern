import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DpoFormComponent } from './dpo-form/dpo-form.component';
import { SelecteddpoComponent } from './selecteddpo.component';
import { DpoDetailComponent } from './dpo-detail/dpo-detail.component';



@NgModule({
  declarations: [
    DpoFormComponent,
    SelecteddpoComponent,
    DpoDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DpoFormComponent,
    SelecteddpoComponent,
    DpoDetailComponent
  ]
})
export class SelecteddpoModule { }
