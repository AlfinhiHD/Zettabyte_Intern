import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { SuperheroesComponent } from './superheroes.component';
import { AddHeroFormComponent } from './add-hero-form/add-hero-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroCardComponent,
    SuperheroesComponent,
    AddHeroFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeroCardComponent,
    SuperheroesComponent,
    AddHeroFormComponent
  ]
})
export class SuperheroesModule { }
