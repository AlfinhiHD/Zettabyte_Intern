import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export const characterFormInit = (fb: FormBuilder): FormGroup => {
  return fb.group({
    id: [''],
    name: fb.group({
      real: ['', Validators.required],
      hero: ['', Validators.required],
    }),
    role: ['', Validators.required],
    class: [''],
    affiliation: ['', Validators.required],
    image: fb.group({
      cover: ['', [Validators.required, Validators.pattern(/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)]],
      portrait: ['', [Validators.required, Validators.pattern(/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)]],
      banner: ['', [Validators.required, Validators.pattern(/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)]],
    }),
    address: fb.array([
      fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      }),
    ]),
    email: ['', [Validators.required, Validators.email]],
    gender: ['', Validators.required],
    ability: fb.array([
      fb.group({
        image: ['', Validators.required],
        name: ['', Validators.required],
        description: ['', Validators.required],
      }),
    ]),
    description: ['', Validators.required],
    age: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    height: [null, Validators.required],
    weight: [null, Validators.required],
    bornDate: ['', Validators.required],
    popularity: [null, Validators.required],
  });
};


