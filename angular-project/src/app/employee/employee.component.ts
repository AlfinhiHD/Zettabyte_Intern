import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/service/employee.service';
import { EmployeeType } from '../shared/helpers/interface';
import { AccentRemovalPipe } from '../shared/pipes/accent-removal/accent-removal.pipe';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  providers: [AccentRemovalPipe],
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  
  employeeList: EmployeeType[] = [];
  searchTerm: string = '';

  constructor(private employeService: EmployeeService, private accentPipe: AccentRemovalPipe ) {}
  ngOnInit(): void {
    this.employeService.employee$.subscribe((employee) => {
      this.employeeList = employee;
    });
  }
  get filteredEmployee(): EmployeeType[] {
    return this.employeeList.filter (
      (employee) => this.accentPipe.transform(employee.name).toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }
}
