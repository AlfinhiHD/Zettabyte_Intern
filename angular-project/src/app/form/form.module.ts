import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { SharedModule } from '../shared/shared.module';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
    DialogContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    FormComponent,
    DialogContentComponent
  ]
})
export class FormModule { }
