import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { employeeFormInit } from 'src/app/shared/helpers/forms';
import {
  Certificate,
  Contact,
  Department,
  Role,
  Title,
} from 'src/app/shared/helpers/interface';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  roles: Role[] = [
    'Frontend Engineer',
    'Backend Engineer',
    'AI Engineer',
    'QA Engineer',
    'Human Resource',
  ];
  departments: Department[] = [
    'Finance Department',
    'Research & Technology',
    'Other',
  ];
  titles: Title[] = ['Entry-Level', 'Mid-Level', 'Senior-Level'];
  contactTypes: string[] = ['email', 'instagram', 'phone', 'linkedin'];

  id: string = '';
  routeSubscription: Subscription;
  isFormValid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeForm = employeeFormInit(this.fb);

    this.route.queryParams.subscribe((queryParams) => {
      this.id = queryParams['id'];
      if (!this.id) {
        this.employeeForm.reset();
        const certificateFormArray = this.employeeForm.get(
          'certificates'
        ) as FormArray;
        certificateFormArray.controls.forEach((control) => {
          control
            .get('dateUpload')
            .setValue(new Date().toISOString().split('T')[0]);
        });
      }
    });

    if (this.id) {
      this.isFormValid = true;
      const employee = this.employeeService.getEmployeeById(this.id);
      if (employee) {
        this.employeeForm.patchValue(employee);
        this.setArrayData(employee.contacts, employee.certificates);
      }
    }

    this.employeeForm.get('email').statusChanges.subscribe((status) => {
      console.log(status);
    });

    this.employeeForm
      .get('contacts')
      .valueChanges.subscribe((contacts: Contact[]) => {
        this.AddContactsValidator(contacts);
      });

    this.employeeForm.get('name').valueChanges.subscribe((name: string) => {
      this.validateInput(name, 'name');
    });

    this.employeeForm.get('email').valueChanges.subscribe((email: string) => {
      this.validateInput(email, 'email');
    });



    this.employeeForm.valueChanges.subscribe(() => {
      console.log(this.employeeForm);
      this.isFormValid = this.employeeForm.valid;
    });
  }

  AddContactsValidator(contacts: Contact[]) {
    contacts.forEach((contact, index) => {
      const valueControl = this.employeeForm.get(`contacts.${index}.value`);
      console.log(contact.type);
      if (contact.type === 'email') {
        valueControl.setValidators([Validators.required, Validators.email]);
      } else if (contact.type === 'phone') {
        valueControl.setValidators([
          Validators.required,
          Validators.pattern(/^[0-9]*$/),
        ]);
      } else if (contact.type === 'instagram') {
        valueControl.setValidators([
          Validators.required,
          Validators.pattern(/^(?=@[a-zA-Z0-9_.-]+$)/),
        ]);
      } else if (contact.type === 'linkedin') {
        valueControl.setValidators([
          Validators.required,
          Validators.pattern(
            /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/
          ),
        ]);
      }
      valueControl.updateValueAndValidity({ emitEvent: false });
    });
  }

  validateInput(value: string, controlName: string) {
    if (!value) {
      this.employeeForm.controls[controlName].setErrors({ required: true });
    } else {
      const pattern =
        controlName === 'name'
          ? /^[a-zA-Z\s'\-.À-ÖØ-öø-ÿß]+$/
          : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!pattern.test(value)) {
        this.employeeForm.controls[controlName].setErrors({
          invalidInput: true,
        });
      } else {
        this.employeeForm.controls[controlName].setErrors(null);
      }
    }
  }

  setArrayData(contacts: Contact[], certificates: Certificate[]): void {
    const contactFormArray = this.employeeForm.get('contacts') as FormArray;
    contacts.forEach((contact, index) => {
      if (index === 0) {
        index++;
      } else {
        contactFormArray.push(
          this.fb.group({
            type: [contact.type, Validators.required],
            value: [contact.value, [Validators.required]],
          })
        );
      }
    });

    const certificateFormArray = this.employeeForm.get(
      'certificates'
    ) as FormArray;
    certificates.forEach((certificate, index) => {
      if (index === 0) {
        index++;
      } else {
        certificateFormArray.push(
          this.fb.group({
            name: [certificate.name, [Validators.required]],
            description: [certificate.description, Validators.required],
            dateUpload: [certificate.dateUpload, Validators.required],
          })
        );
      }
    });
  }

  addField(type: string): void {
    if (type === 'contact') {
      const contact = this.employeeForm.get('contacts') as FormArray;
      contact.push(
        this.fb.group({
          type: [null, Validators.required],
          value: ['', Validators.required],
        })
      );
    } else if (type === 'certificate') {
      const certificate = this.employeeForm.get('certificates') as FormArray;
      certificate.push(
        this.fb.group({
          name: ['', Validators.required],
          description: ['', Validators.required],
          dateUpload: [
            new Date().toISOString().split('T')[0],
            Validators.required,
          ],
        })
      );
    }
  }

  removeField(index: number, type: string): void {
    if (type === 'contact') {
      const contacts = this.employeeForm.get('contacts') as FormArray;
      if (contacts && contacts.length > index) {
        contacts.removeAt(index);
      }
    } else if (type === 'certificate') {
      const certificates = this.employeeForm.get('certificates') as FormArray;
      if (certificates && certificates.length > index) {
        certificates.removeAt(index);
      }
    }
  }

  isFirstField(index: number, type: string): any {
    if (type === 'contact') {
      const contacts = this.employeeForm.get('contacts') as FormArray;
      return index === 0 && contacts.length === 1;
    } else if (type === 'certificate') {
      const certificates = this.employeeForm.get('certificates') as FormArray;
      return index === 0 && certificates.length === 1;
    }
  }

  onSubmit(): void {
    const formData = this.employeeForm.value;
    

    this.employeeForm.markAllAsTouched();

    if (this.employeeForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields with valid value!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    let successMessage = '';
    let confirmButtonText = '';

    if (!this.id) {
      formData.id = uuidv4();
      successMessage = 'Successfully added new data!';
      confirmButtonText = 'Yes, add it!';
      this.employeeService.addNewEmployee(formData);
    } else {
      successMessage = 'Your data has been edited!';
      confirmButtonText = 'Yes, edit it!';
      this.employeeService.updateEmployee(formData);
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
