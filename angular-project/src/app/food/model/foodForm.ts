import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const FoodFormInit = (fb: FormBuilder): FormGroup => {
  return fb.group({
    _id: [''],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [null, Validators.required],
    image: fb.group({
      cover: ['', [Validators.required, Validators.pattern(/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)]],
      preview: ['', [Validators.required, Validators.pattern(/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)]],
    }),
    ingredients: fb.array([
      fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        price: [null, Validators.required],
        amount: ['', Validators.required],
      }),
    ]),
    stock: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    popularity: [null, [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.max(100)]],
  });
};