import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dpo-form',
  templateUrl: './dpo-form.component.html',
  styleUrls: ['./dpo-form.component.scss'],
})
export class DpoFormComponent implements OnInit {
  dpoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dpoForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      marital: ['', Validators.required],
      job: ['', Validators.required],
      description: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      addresses: this.fb.group({
        address: ['', Validators.required],
        zipcode: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });
  }

  onSubmit(): void {
    // Handle form submission here
  }
}
