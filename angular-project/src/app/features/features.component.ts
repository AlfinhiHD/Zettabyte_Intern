import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeType } from '../shared/helpers/interface';
import { EmployeeService } from '../shared/service/employee.service';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  employeeId: string;
  employee: EmployeeType;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.getEmployeeDetail(this.employeeId);
    if (!this.employee) {
      this.router.navigate(['/home']);
    }
  }

  getEmployeeDetail(id: string): void {
    this.employee = this.employeeService.getEmployeeById(id);
  }

}
