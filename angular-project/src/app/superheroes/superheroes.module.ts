import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { SuperheroesComponent } from './superheroes.component';



@NgModule({
  declarations: [
    HeroCardComponent,
    SuperheroesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroCardComponent,
    SuperheroesComponent
  ]
})
export class SuperheroesModule { }
