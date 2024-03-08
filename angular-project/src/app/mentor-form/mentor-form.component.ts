import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MentorService } from '../shared/service/mentor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.scss'],
})
export class MentorFormComponent implements OnInit {
  mentorForm: FormGroup;
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private mentorService: MentorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.route.queryParams.subscribe((queryParams) => {
      this.id = queryParams['id'];
      if (!this.id) {
        this.mentorForm.reset();
      }
    });

    if (this.id) {
      const mentor = this.mentorService.getMentorById(this.id);
      if (mentor) {
        this.mentorForm.patchValue(mentor);
      }
    }
  }
  createForm(): void {
    this.mentorForm = this.fb.group({
      _id: [''], 
      email: ['', Validators.required], 
      civility: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      company: this.fb.group({ 
        name: ['', Validators.required],
        user_type: ['', Validators.required]
      }),
      user_status: ['active'],
      count_document: ['', Validators.required] 
    });
  }

  onSubmit(): void {
    const formData = this.mentorForm.value;
    let successMessage = '';
    let confirmButtonText = '';

    if (this.mentorForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields with valid value!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    if (!this.id) {
      formData._id = '999';
      successMessage = 'Successfully added new data!';
      confirmButtonText = 'Yes, add it!';
      this.mentorService.addNewMentor(formData);
    } else {
      successMessage = 'Your data has been edited!';
      confirmButtonText = 'Yes, edit it!';
      this.mentorService.updateMentor(formData);
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
