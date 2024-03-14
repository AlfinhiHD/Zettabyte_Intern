import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoManagementComponent } from './promo-management.component';
import { PromoCardComponent } from './promo-card/promo-card.component';
import { SharedModule } from '../shared/shared.module';
import { PromoFormComponent } from './promo-form/promo-form.component';



@NgModule({
  declarations: [
    PromoManagementComponent,
    PromoCardComponent,
    PromoFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PromoManagementComponent,
    PromoCardComponent,
    PromoFormComponent
  ]
})
export class PromoManagementModule { }
