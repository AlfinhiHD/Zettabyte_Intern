import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PromoService } from '../promo.service';
import { Router } from '@angular/router';
import { promoFormInit } from '../model/promoFormInit';
import Swal from 'sweetalert2';
import { PromoType } from '../model/promo';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-promo-form',
  templateUrl: './promo-form.component.html',
  styleUrls: ['./promo-form.component.scss'],
})
export class PromoFormComponent implements OnInit {
  promoForm: FormGroup;
  id: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private promoService: PromoService,
    private router: Router,
    private dialogRef: MatDialogRef<PromoFormComponent>,
  ) {}

  ngOnInit(): void {
    this.promoForm = promoFormInit(this.fb);

    if (!this.data?._id) {
      this.promoForm.reset();
    }

    if (this.data?._id) {
      this.id = this.data._id;
      this.getOnePromo(this.data._id);
    }
  }

  getOnePromo(id: string): void {
    this.promoService.getOnePromo(id).subscribe(
      (promo) => {
        console.log('Promo berhasil diperoleh:', promo);
        this.promoForm.patchValue(promo);
      },
      (error) => {
        console.error('Gagal mendapatkan promo:', error);
      }
    );
  }

  updatePromo(id: string, promoUpdated: PromoType): void {
    this.promoService.updatePromo(id, promoUpdated).subscribe(
      (next) => {
        console.log('Promo edited:', next);
        Swal.fire('Success!', 'Promo berhasil diedit.', 'success');
      },
      (error) => {
        console.error('Gagal mengedit promo:', error);
        Swal.fire('Error!', error.message, 'error');
      }
    );
  }

  createPromo(promoInput: PromoType): void {
    this.promoService.createPromo(promoInput).subscribe({
      next: (next) => {
        console.log('Promo add:' + next);
        Swal.fire('Success!', 'Promo berhasil dibuat.', 'success')
      },
      error: (error) => {
        console.error('Gagal membuat promo:', error);
        Swal.fire('Error!', error.message, 'error');
      },
    });
  }

  onSubmit(): void {
    const formData = this.promoForm.value;
    console.log(formData);
    let confirmButtonText = '';

    this.promoForm.markAllAsTouched();

    if (this.promoForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields with valid value!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    if (!this.id) {
      confirmButtonText = 'Yes, add it!';
    } else {
      confirmButtonText = 'Yes, edit it!';
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
        this.router.navigate(['/promo']);

        if (!this.id) {
          this.createPromo(formData);
          this.dialogRef.close("success");
        } else {
          this.updatePromo(this.id, formData);
          this.dialogRef.close("success");
        }

        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your form is safe :)', 'error');
        
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
