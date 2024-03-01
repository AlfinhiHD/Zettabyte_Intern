import { FormBuilder, Validators } from '@angular/forms';

export const dpoFormInit = (fb: FormBuilder) => {
  return fb.group({
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
    contacts: fb.array([
      fb.group({
        telp: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        as: ['', Validators.required],
      }),
    ]),
    height: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    weight: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    addresses: fb.array([
      fb.group({
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
};