import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedPlantComponent } from './selectedplant.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SelectedPlantComponent,
    PlantDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SelectedPlantComponent}])
  ],
  exports: [
    PlantDetailComponent,
    SelectedPlantComponent
  ]
})
export class SelectedPlantModule { }
