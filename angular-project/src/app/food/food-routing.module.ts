import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FoodComponent
  },
  {
    path: 'form',
    component: FoodFormComponent
  },
  {
    path: 'detail/:id',
    component: FoodDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
