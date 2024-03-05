import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeBannerComponent } from './employee-banner/employee-banner.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeCardComponent,
    EmployeeBannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    EmployeeComponent,
    EmployeeCardComponent,
    EmployeeBannerComponent
  ]
})
export class EmployeeModule { }
