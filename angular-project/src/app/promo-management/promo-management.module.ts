import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoManagementComponent } from './promo-management.component';
import { PromoCardComponent } from './promo-card/promo-card.component';
import { SharedModule } from '../shared/shared.module';
import { PromoFormComponent } from './promo-form/promo-form.component';
import { PromoManagementRoutingModule } from './promo-management-routing.module';



@NgModule({
  declarations: [
    PromoManagementComponent,
    PromoCardComponent,
    PromoFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PromoManagementRoutingModule
  ],
  exports: [
    PromoManagementComponent,
    PromoCardComponent,
    PromoFormComponent
  ]
})
export class PromoManagementModule { }
