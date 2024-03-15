import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodFormComponent } from './food-form/food-form.component';


@NgModule({
  declarations: [
    FoodComponent,
    FoodCardComponent,
    FoodDetailComponent,
    FoodFormComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ],
  exports: [
    FoodComponent,
    FoodCardComponent,
    FoodDetailComponent,
    FoodFormComponent
  ]
})
export class FoodModule { }
