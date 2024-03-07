import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedghibliComponent } from './selectedghibli.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { ListCharacterComponent } from './list-character/list-character.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: SelectedghibliComponent},
];


@NgModule({
  declarations: [
    SelectedghibliComponent,
    FilmDetailComponent,
    ListCharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    SelectedghibliComponent,
    FilmDetailComponent,
    ListCharacterComponent
  ]
})
export class SelectedghibliModule { }
