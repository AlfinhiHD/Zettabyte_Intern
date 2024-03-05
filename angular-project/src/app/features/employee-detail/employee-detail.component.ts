import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeType } from 'src/app/shared/helpers/interface';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  providers: [
    DatePipe,
    TitleCasePipe,
  ],
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee: EmployeeType

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  onDeleteEmployee(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(id);
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
        this.router.navigate(['/home']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your data is safe :)',
          'error'
        )
      }
    })
  }

}
