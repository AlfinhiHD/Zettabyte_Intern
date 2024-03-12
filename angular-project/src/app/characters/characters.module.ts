import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterTableComponent } from './character-table/character-table.component';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: CharactersComponent},
  { path: 'detail/:id', component: CharacterDetailComponent }
]

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterCardComponent,
    CharacterTableComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CharactersComponent,
    CharacterCardComponent,
    CharacterTableComponent,
    CharacterDetailComponent
  ]
})
export class CharactersModule { }
