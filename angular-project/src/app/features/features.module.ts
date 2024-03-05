import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FeaturesComponent } from './features.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'detail/:id', component: FeaturesComponent},
  { path: 'inputform', component: EmployeeFormComponent},
];

@NgModule({
  declarations: [
    EmployeeFormComponent,
    FeaturesComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    EmployeeFormComponent,
    FeaturesComponent,
    EmployeeDetailComponent
  ]
})
export class FeaturesModule { }