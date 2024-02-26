import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCartComponent } from './card-cart/card-cart.component';
import { CartComponent } from './cart.component';
import { TotalpriceCartComponent } from './totalprice-cart/totalprice-cart.component';



@NgModule({
  declarations: [
    CardCartComponent,
    CartComponent,
    TotalpriceCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardCartComponent,
    CartComponent,
    TotalpriceCartComponent
  ]
})
export class CartModule { }
