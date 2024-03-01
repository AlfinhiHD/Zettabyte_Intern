import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { dpoFormInit } from 'src/app/shared/helpers/forms';
import {
  DPOAddressType,
  DPOContactType,
} from 'src/app/shared/helpers/interface';
import { DpoService } from 'src/app/shared/service/dpo.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dpo-form',
  templateUrl: './dpo-form.component.html',
  styleUrls: ['./dpo-form.component.scss'],
})
export class DpoFormComponent implements OnInit, OnChanges {
  dpoForm: FormGroup;

  id: string = '';

  constructor(
    private fb: FormBuilder,
    private dpoService: DpoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('masuk');
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];

    this.dpoForm = dpoFormInit(this.fb)

    if (this.id) {
      const dpo = this.dpoService.getdpoById(this.id);
      if (dpo) {
        this.dpoForm.patchValue(dpo);
        this.setArrayData(dpo.addresses, dpo.contacts);
      }
    }
  }

  setArrayData(addresses: DPOAddressType[], contacts: DPOContactType[]): void {
    const addressFormArray = this.dpoForm.get('addresses') as FormArray;
    addresses.forEach((address, index) => {
      if (index === 0) {
        index++;
      } else {
        addressFormArray.push(
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

    const contactsFormArray = this.dpoForm.get('contacts') as FormArray;
    contacts.forEach((contact, index) => {
      if (index === 0) {
        index++;
      } else {
        contactsFormArray.push(
          this.fb.group({
            telp: [
              contact.telp,
              [Validators.required, Validators.pattern(/^[0-9]*$/)],
            ],
            as: [contact.as, Validators.required],
          })
        );
      }
    });
  }

  addField(type: string): void {
    if (type === 'contact') {
      const contacts = this.dpoForm.get('contacts') as FormArray;
      contacts.push(
        this.fb.group({
          telp: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
          as: ['', Validators.required],
        })
      );
    } else if (type === 'address') {
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
  }
  
  removeField(index: number, type: string): void {
    if (type === 'contact') {
      const contacts = this.dpoForm.get('contacts') as FormArray;
      if (contacts && contacts.length > index) {
        contacts.removeAt(index);
      }
    } else if (type === 'address') {
      const addresses = this.dpoForm.get('addresses') as FormArray;
      if (addresses && addresses.length > index) {
        addresses.removeAt(index);
      }
    }
  }
  
  isFirstField(index: number, type: string): any {
    if (type === 'contact') {
      const contacts = this.dpoForm.get('contacts') as FormArray;
      return index === 0 && contacts.length === 1;
    } else if (type === 'address') {
      const addresses = this.dpoForm.get('addresses') as FormArray;
      return index === 0 && addresses.length === 1;
    }
  }

  onSubmit(): void {
    const addressesGroup = this.dpoForm.get('addresses') as FormGroup;
    const formData = this.dpoForm.value;
    console.log(this.dpoForm);

    this.dpoForm.markAllAsTouched();
    addressesGroup.markAllAsTouched();

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
