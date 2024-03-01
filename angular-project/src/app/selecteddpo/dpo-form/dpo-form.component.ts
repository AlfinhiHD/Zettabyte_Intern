import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DpoService } from 'src/app/shared/service/dpo.service';
import Swal from 'sweetalert2';
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
      id: [''],
      name: ['', Validators.required],
      image: ['', Validators.required],
      age: [
        null,
        [
          Validators.required,
          Validators.min(18),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      gender: ['', Validators.required],
      marital: ['', Validators.required],
      job: ['', Validators.required],
      status: [''],
      description: ['', Validators.required],
      height: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      weight: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      addresses: this.fb.array([
        this.fb.group({
          address: ['', Validators.required],
          zipcode: [
            null,
            [Validators.required, Validators.pattern(/^[0-9]*$/)],
          ],
          city: ['', Validators.required],
          country: ['', Validators.required],
        }),
      ]),
    });

    if (this.id) {
      const dpo = this.dpoService.getdpoById(this.id);
      if (dpo) {
        this.dpoForm.patchValue(dpo);
        this.setAddresses(dpo.addresses);
      }
    }
  }

  setAddresses(addresses: any[]): void {
    const addressFormArray = this.dpoForm.get('addresses') as FormArray;
    addresses.forEach((address, index) => {
      if (index === 0) {
        index++;
      } else {
        console.log(index);

        // addressFormArray.push(
        //   this.fb.group({
        //     address: [address.address, Validators.required],
        //     zipcode: [
        //       address.zipcode,
        //       [Validators.required, Validators.pattern(/^[0-9]*$/)],
        //     ],
        //     city: [address.city, Validators.required],
        //     country: [address.country, Validators.required],
        //   })
        // );

        addressFormArray.insert(
          index + 1,
          this.fb.group({
            address: [address.address, Validators.required],
            zipcode: [
              address.zipcode,
              [Validators.required, Validators.pattern(/^[0-9]*$/)],
            ],
            city: [address.city, Validators.required],
            country: [address.country, Validators.required],
          })
        );
      }
    });
  }

  addAddress() {
    const addresses = this.dpoForm.get('addresses') as FormArray;
    addresses.push(
      this.fb.group({
        address: ['', Validators.required],
        zipcode: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        city: ['', Validators.required],
        country: ['', Validators.required],
      })
    );
  }

  removeAddress(index: number) {
    const addresses = this.dpoForm.get('addresses') as FormArray;
    if (addresses && addresses.length > index) {
      addresses.removeAt(index);
    }
  }

  isFirstAddress(index: number): boolean {
    const addresses = this.dpoForm.get('addresses') as FormArray;
    return index === 0 && addresses.length === 1;
  }

  onSubmit(): void {
    const addressesGroup = this.dpoForm.get('addresses') as FormGroup;
    const formData = this.dpoForm.value;
    console.log(this.dpoForm);

    Object.keys(this.dpoForm.controls).forEach((key) => {
      this.dpoForm.get(key).markAsTouched();
    });

    Object.keys(addressesGroup.controls).forEach((key) => {
      addressesGroup.get(key).markAsTouched();
    });

    if (this.dpoForm.invalid) {
      return;
    }

    let successMessage = '';
    let confirmButtonText = '';
    
    if (!this.id) {
      formData.id = uuidv4();
      formData.status = 'Wanted';
      successMessage = 'Successfully added new data!';
      confirmButtonText = 'Yes, add it!';
      this.dpoService.addNewdpo(formData);
    } else {
      successMessage = 'Your data has been edited!';
      confirmButtonText = 'Yes, edit it!';
      this.dpoService.updatedpo(formData);
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to submit this form!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home']);
        Swal.fire(
          'Submitted!',
          successMessage,
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your form is safe :)',
          'error'
        );
      }
    });
  }

}
