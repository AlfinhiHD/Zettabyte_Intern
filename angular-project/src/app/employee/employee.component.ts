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
  searchTerm: string = '';

  constructor(private employeService: EmployeeService ) {}

  ngOnInit(): void {
    this.employeService.employee$.subscribe((employee) => {
      this.employeeList = employee;
    });
  }

  get filteredEmployee(): EmployeeType[] {
    return this.employeeList.filter (
      (employee) => employee.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }
}
