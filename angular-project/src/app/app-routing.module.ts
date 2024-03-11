import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  {
    path: 'character',
    loadChildren: () => import('./characters/characters.module').then(
      (m) => m.CharactersModule
    )
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./form/form.module').then(
        (m) => m.FormModule
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
