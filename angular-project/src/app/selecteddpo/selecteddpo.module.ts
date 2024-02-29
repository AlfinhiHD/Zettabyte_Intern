import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DpoFormComponent } from './dpo-form/dpo-form.component';
import { SelecteddpoComponent } from './selecteddpo.component';



@NgModule({
  declarations: [
    DpoFormComponent,
    SelecteddpoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DpoFormComponent,
    SelecteddpoComponent
  ]
})
export class SelecteddpoModule { }
