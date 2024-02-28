import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantComponent } from './plant.component';
import { PlantBannerComponent } from './plant-banner/plant-banner.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantAddComponent } from './plant-add/plant-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlantComponent,
    PlantBannerComponent,
    PlantCardComponent,
    PlantAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PlantComponent,
    PlantBannerComponent,
    PlantCardComponent,
    PlantAddComponent
  ]
})
export class PlantModule { }
