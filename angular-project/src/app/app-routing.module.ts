import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorComponent } from './mentor/mentor.component';
import { MentorFormModule } from './mentor-form/mentor-form.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: MentorComponent},
  {
    path: 'detail/:id', loadChildren: () => import('./selectedmentor/selectedmentor.module').then((m) => m.SelectedmentorModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./mentor-form/mentor-form.module').then((m) => m.MentorFormModule),

  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
