import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantComponent } from './plant.component';
import { PlantBannerComponent } from './plant-banner/plant-banner.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlantComponent,
    PlantBannerComponent,
    PlantCardComponent,
    PlantFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PlantComponent,
    PlantBannerComponent,
    PlantCardComponent,
    PlantFormComponent
  ]
})
export class PlantModule { }
