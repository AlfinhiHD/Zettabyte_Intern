import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantComponent } from './plant/plant.component';
import { SelectedPlantComponent } from './selectedplant/selectedplant.component';
import { PlantFormComponent } from './plant/plant-form/plant-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PlantComponent },
  { path: 'detail/:id', component: SelectedPlantComponent },
  { path: 'addplant', component: PlantFormComponent },
  { path: 'editplant', component: PlantFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
