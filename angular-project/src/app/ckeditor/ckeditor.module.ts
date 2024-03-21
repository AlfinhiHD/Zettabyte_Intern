import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkeditorComponent } from './ckeditor.component';
import { SharedModule } from '../shared/shared.module';
import { CkeditorOutputComponent } from './ckeditor-output/ckeditor-output.component';



@NgModule({
  declarations: [
    CkeditorComponent,
    CkeditorOutputComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CkeditorComponent,
    CkeditorOutputComponent
  ]
})
export class CkeditorModule { }
