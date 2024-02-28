import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantComponent } from './plant.component';
import { PlantBannerComponent } from './plant-banner/plant-banner.component';
import { PlantCardComponent } from './plant-card/plant-card.component';



@NgModule({
  declarations: [
    PlantComponent,
    PlantBannerComponent,
    PlantCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlantComponent,
    PlantBannerComponent,
    PlantCardComponent
  ]
})
export class PlantModule { }
