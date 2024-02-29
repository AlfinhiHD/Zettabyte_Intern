import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DpoComponent } from './dpo/dpo.component';
import { SelecteddpoComponent } from './selecteddpo/selecteddpo.component';
import { DpoFormComponent } from './selecteddpo/dpo-form/dpo-form.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: DpoComponent},
  { path: 'dpo/detail/:id', component: SelecteddpoComponent},
  { path: 'dpo/inputform', component: DpoFormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
