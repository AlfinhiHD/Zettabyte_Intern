import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DpoService } from 'src/app/shared/service/dpo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dpo-form',
  templateUrl: './dpo-form.component.html',
  styleUrls: ['./dpo-form.component.scss'],
})
export class DpoFormComponent implements OnInit {
  dpoForm: FormGroup;

  id: string = '';

  constructor(
    private fb: FormBuilder,
    private dpoService: DpoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];

    this.dpoForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.pattern(/^[0-9]*$/)]],
      gender: ['', Validators.required],
      marital: ['', Validators.required],
      job: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required],
      height: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      weight: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      addresses: this.fb.group({
        address: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        city: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });

    if (this.id) {
      const dpo = this.dpoService.getdpoById(this.id);
      if (dpo) {
        this.dpoForm.patchValue(dpo);
      }
    }
  }

  onSubmit(): void {
    const formData = this.dpoForm.value;
    console.log(formData);

    Object.keys(this.dpoForm.controls).forEach((key) => {
      this.dpoForm.get(key)?.markAsTouched();
    });

    const addressesGroup = this.dpoForm.get('addresses') as FormGroup;

    Object.keys(addressesGroup.controls).forEach((key) => {
      addressesGroup.get(key)?.markAsTouched();
    });

    if (this.dpoForm.invalid) {
      // Form tidak valid, tidak melakukan apa-apa
      return;
    }

    if (!this.id) {
      formData.id = uuidv4();
      formData.status = 'Wanted';
      this.dpoService.addNewdpo(formData);
    } else {
      this.dpoService.updatedpo(formData);
    }
    this.router.navigate(['/home']);
  }
}
