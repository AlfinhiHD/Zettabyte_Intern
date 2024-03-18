import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const FoodFormInit = (fb: FormBuilder): FormGroup => {
  return fb.group({
    _id: [''],
    name: ['', Validators.required],
    type: ['', Validators.required],
    description: ['', Validators.required],
    price: [null, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    image: fb.group({
      cover: [
        '',
        [
          Validators.required,
          Validators.pattern(/\.(gif|jpe?g|tiff|png|webp|bmp|jpe|jpg?)$/i),
        ],
      ],
      preview: [
        '',
        [
          Validators.required,
          Validators.pattern(/\.(gif|jpe?g|tiff|png|webp|bmp|jpe|jpg?)$/i),
        ],
      ],
    }),
    ingredients: fb.array([
      fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        price: [
          null,
          [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
        ],
        amount: ['', Validators.required],
      }),
    ]),
    stock: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    popularity: [
      null,
      [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.max(100),
      ],
    ],
  });
};
