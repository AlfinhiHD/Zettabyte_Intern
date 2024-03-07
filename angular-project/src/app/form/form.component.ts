import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { GhibliService } from '../shared/service/ghibli.service';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  filmForm: FormGroup;
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private ghibliService: GhibliService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.route.queryParams.subscribe((queryParams) => {
      this.id = queryParams['id'];
      if (!this.id) {
        this.filmForm.reset();
      }
    });

    if (this.id) {
      const film = this.ghibliService.getMovieById(this.id);
      if (film) {
        this.filmForm.patchValue(film);
      }
    }
  }
  createForm(): void {
    this.filmForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      director: ['', Validators.required],
      releaseYear: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      rating: ['', Validators.required],
      image: this.fb.group({
        main: ['', Validators.required],
        heading: ['', Validators.required],
      })
    });
  }

  onSubmit(): void {
    const formData = this.filmForm.value;
    let successMessage = '';
    let confirmButtonText = '';

    if (this.filmForm.invalid) {
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
      this.ghibliService.addNewMovie(formData);
    } else {
      successMessage = 'Your data has been edited!';
      confirmButtonText = 'Yes, edit it!';
      this.ghibliService.updateMovie(formData);
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
