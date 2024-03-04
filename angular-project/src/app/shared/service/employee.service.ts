import { Injectable } from '@angular/core';
import { EmployeeType } from '../helpers/interface';
import { BehaviorSubject } from 'rxjs';
import EmployeeData from '../helpers/data';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee: BehaviorSubject<EmployeeType[]> = new BehaviorSubject<
    EmployeeType[]
  >([]);
  employee$ = this.employee.asObservable();

  constructor() {
    this.employee.next([...this.employee.getValue(), ...EmployeeData]);
  }

  addNewEmployee(newEmployee: EmployeeType) {
    this.employee.next([...this.employee.getValue(), newEmployee]);
  }

deleteEmployee(id: string) {
  const employeeList = this.employee.getValue();
  const index = employeeList.findIndex((employee) => employee.id === id);
  if (index !== -1) {
    employeeList.splice(index, 1);
    this.employee.next(employeeList);
  }
}

  getEmployeeById(id: string) {
    return this.employee.getValue().find((employee) => employee.id === id);
  }
  
  updateEmployee(updatedEmployee: EmployeeType) {
    const Employees = this.employee.getValue();
    const index = Employees.findIndex((Employee) => Employee.id === updatedEmployee.id);
    if (index !== -1) {
      Employees[index] = updatedEmployee;
      this.employee.next([...Employees]);
    }
  }
}
