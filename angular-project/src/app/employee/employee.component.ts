import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/service/employee.service';
import { EmployeeType } from '../shared/helpers/interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employeeList: EmployeeType[] = [];

  constructor(private employeService: EmployeeService ) {}

  ngOnInit(): void {
    this.employeService.employee$.subscribe((employee) => {
      this.employeeList = employee;
    });
  }
}
