import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhibliComponent } from './ghibli.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { CharacterCardComponent } from './character-card/character-card.component';



@NgModule({
  declarations: [
    GhibliComponent,
    FilmCardComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GhibliComponent,
    FilmCardComponent,
    CharacterCardComponent
  ]
})
export class GhibliModule { }
