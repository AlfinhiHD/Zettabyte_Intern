import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedPlantComponent } from './selectedplant.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SelectedPlantComponent,
    PlantDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PlantDetailComponent,
    SelectedPlantComponent
  ]
})
export class SelectedPlantModule { }
