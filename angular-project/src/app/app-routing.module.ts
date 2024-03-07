import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhibliComponent } from './ghibli/ghibli.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: GhibliComponent},
  {
    path: 'detail/:id',
    loadChildren: () => 
    import('../app/selectedghibli/selectedghibli.module').then(
      (m) => m.SelectedghibliModule
    ),
  },
  {
    path: 'form',
    loadChildren: () => 
    import('../app/form/form.module').then(
      (m) => m.FormModule
    ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
