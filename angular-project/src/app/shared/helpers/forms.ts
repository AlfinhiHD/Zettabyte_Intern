import { FormBuilder, Validators } from '@angular/forms';

export const employeeFormInit = (fb: FormBuilder) => {
  return fb.group({
    id: [''],
    name: ['', Validators.required],
    email: ['', Validators.required],
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
    role: ['', Validators.required],
    department: ['', Validators.required],
    title: ['', Validators.required],
    contacts: fb.array([
      fb.group({
        type: ['', Validators.required],
        value: ['', Validators.required],
      }),
    ]),
    address: fb.group({
      address: ['', Validators.required],
      zipcode: [
        null,
        [Validators.required, Validators.pattern(/^[0-9]*$/)],
      ],
      city: ['', Validators.required],
      country: ['', Validators.required],
    }),
    certificates: fb.array([
      fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        dateUpload: ['', Validators.required],
      }),
    ]),
  });
};