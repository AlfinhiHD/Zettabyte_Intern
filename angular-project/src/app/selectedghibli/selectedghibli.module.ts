import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedghibliComponent } from './selectedghibli.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { ListCharacterComponent } from './list-character/list-character.component';



@NgModule({
  declarations: [
    SelectedghibliComponent,
    FilmDetailComponent,
    ListCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectedghibliComponent,
    FilmDetailComponent,
    ListCharacterComponent
  ]
})
export class SelectedghibliModule { }
