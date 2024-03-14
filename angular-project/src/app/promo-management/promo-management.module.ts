import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoManagementComponent } from './promo-management.component';
import { PromoCardComponent } from './promo-card/promo-card.component';
import { SharedModule } from '../shared/shared.module';
import { PromoFormComponent } from './promo-form/promo-form.component';
import { PromoManagementRoutingModule } from './promo-management-routing.module';
import { PromoDetailComponent } from './promo-detail/promo-detail.component';



@NgModule({
  declarations: [
    PromoManagementComponent,
    PromoCardComponent,
    PromoFormComponent,
    PromoDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PromoManagementRoutingModule
  ],
  exports: [
    PromoManagementComponent,
    PromoCardComponent,
    PromoFormComponent,
    PromoDetailComponent
  ]
})
export class PromoManagementModule { }
