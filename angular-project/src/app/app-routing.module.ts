import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MentorModule } from './mentor/mentor.module';
import { SelectedmentorModule } from './selectedmentor/selectedmentor.module';
import { MentorComponent } from './mentor/mentor.component';
import { MentorFormModule } from './mentor-form/mentor-form.module';

const routes: Routes = [
  { path: 'home', component: MentorComponent },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./selectedmentor/selectedmentor.module').then(
        (m) => m.SelectedmentorModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./mentor-form/mentor-form.module').then(
        (m) => m.MentorFormModule
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MentorFormModule,
    SelectedmentorModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
