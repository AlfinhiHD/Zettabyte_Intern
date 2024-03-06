import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserType } from 'src/app/shared/helpers/interface';
import { UserService } from 'src/app/shared/service/user.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user: UserType;
  userId: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.spinner.show();
    this.getUserDetail(this.userId);
  }

  getUserDetail(id: number): void {
    this.userService.getUserById(id).subscribe(
      (response: UserType) => {
        this.user = response;
        this.spinner.hide();
      },
      (error) => {
        console.error('Error fetching user detail:', error);
        this.spinner.hide(); 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while fetching user detail!',
        });
      }
    );
  }
  
  onDeleteUser(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id);
        Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
        this.router.navigate(['/user']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your data is safe :)', 'error');
      }
    });
  }
}
