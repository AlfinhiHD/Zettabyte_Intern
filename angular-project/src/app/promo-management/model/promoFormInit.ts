import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const promoFormInit = (fb: FormBuilder): FormGroup => {
  return fb.group({
    ref: ['', Validators.required],
    title: ['', Validators.required],
    sub_title: ['', Validators.required],
    description: ['', Validators.required],
    image_url: ['', Validators.required],
  });
};