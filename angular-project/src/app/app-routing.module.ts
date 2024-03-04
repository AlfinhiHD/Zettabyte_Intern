import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: EmployeeComponent},
  {
    path: 'employee',
    loadChildren: () =>
      import('./features/features.module').then(
        (m) => m.FeaturesModule
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
