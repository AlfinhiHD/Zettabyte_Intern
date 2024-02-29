import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DpoComponent } from './dpo.component';
import { DpoCardComponent } from './dpo-card/dpo-card.component';
import { DpoBannerComponent } from './dpo-banner/dpo-banner.component';



@NgModule({
  declarations: [
    DpoComponent,
    DpoCardComponent,
    DpoBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DpoComponent,
    DpoCardComponent,
    DpoBannerComponent
  ]
})
export class DpoModule { }
