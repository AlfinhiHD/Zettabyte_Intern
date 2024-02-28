import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedPlantComponent } from './selectedplant.component';
import { PlantEditComponent } from './plant-edit/plant-edit.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SelectedPlantComponent,
    PlantEditComponent,
    PlantDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PlantEditComponent,
    PlantDetailComponent,
    SelectedPlantComponent
  ]
})
export class SelectedPlantModule { }
