import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantComponent } from './plant/plant.component';
import { PlantDetailComponent } from './selectedplant/plant-detail/plant-detail.component';
import { SelectedPlantComponent } from './selectedplant/selectedplant.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PlantComponent },
  { path: 'detail/:id', component: SelectedPlantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
