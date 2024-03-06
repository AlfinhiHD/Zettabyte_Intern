import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { userFormInit } from 'src/app/shared/helpers/forms';
import { UserService } from 'src/app/shared/service/user.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  id: number = 0;
  routeSubscription: Subscription;


  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userForm = userFormInit(this.fb);

    this.route.queryParams.subscribe((queryParams) => {
      this.id = queryParams['id'];
      if (!this.id) {
        this.userForm.reset();
      }
    });

    if (this.id) {
      // const user = this.userService.getuserById(this.id);
      // if (user) {
      //   this.userForm.patchValue(user);
      // }
    }
  }

  onSubmit(): void {
    const formData = this.userForm.value;
    let successMessage = '';
    let confirmButtonText = '';

    this.userForm.markAllAsTouched();

    if (this.userForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields with valid value!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }
    if (!this.id) {
      formData.id = uuidv4();
      successMessage = 'Successfully added new data!';
      confirmButtonText = 'Yes, add it!';
      // this.userService.addNewuserService(formData);
    } else {
      successMessage = 'Your data has been edited!';
      confirmButtonText = 'Yes, edit it!';
      // this.userService.updateuserService(formData);
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to submit this form!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home']);
        Swal.fire('Submitted!', successMessage, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your form is safe :)', 'error');
      }
    });
  }

}
