import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { characterFormInit } from 'src/app/shared/helpers/form';
import { CharacterService } from 'src/app/shared/service/character.service';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
})
export class DialogContentComponent implements OnInit {
  characterForm: FormGroup;
  id: string;
  roles: string[] = ['Student', 'Teacher'];
  genders: string[] = ['Male', 'Female', 'Others'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private characterService: CharacterService,
    private router: Router,
    private dialogRef: MatDialogRef<DialogContentComponent>
  ) {}

  ngOnInit(): void {
    this.characterForm = characterFormInit(this.fb);

    if (!this.data?.id) {
      this.characterForm.reset();
    }

    if (this.data?.id) {
      this.id = this.data.id;
      const character = this.characterService.getCharacterById(this.data.id);
      if (character) {
        this.characterForm.patchValue(character);
        this.setArrayData(character.address, character.ability);
      }
    }
  }

  setArrayData(address: any, ability: any): void {
    const addressFormArray = this.characterForm.get('address') as FormArray;
    address.forEach((address, index) => {
      if (index === 0) {
        index++;
      } else {
        addressFormArray.push(
          this.fb.group({
            street: [address.street, Validators.required],
            city: [address.city, Validators.required],
            zipcode: [address.zipcode, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
          }),
        );
      }
    });

    const abilityFormArray = this.characterForm.get('ability') as FormArray;
    ability.forEach((ability, index) => {
      if (index === 0) {
        index++;
      } else {
        abilityFormArray.push(
          this.fb.group({
            image: [ability.image, Validators.required],
            name: [ability.name, Validators.required],
            description: [ability.description, Validators.required],
          }),
        );
      }
    });
  }

  addField(type: string): void {
    if (type === 'address') {
      const address = this.characterForm.get('address') as FormArray;
      address.push(
        this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          zipcode: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        })
      );
    }
    else if (type === 'ability') {
      const ability = this.characterForm.get('ability') as FormArray;
      ability.push(
        this.fb.group({
          image: ['', Validators.required],
          name: ['', Validators.required],
          description: ['', Validators.required],
        }),
      );
    }
  }

  removeField(index: number, type: string): void {
    if (type === 'address') {
      const address = this.characterForm.get('address') as FormArray;
      if (address && address.length > index) {
        address.removeAt(index);
      }
    }
    else if (type === 'ability') {
      const ability = this.characterForm.get('ability') as FormArray;
      if (ability && ability.length > index) {
        ability.removeAt(index);
      }
    }
  }

  isFirstField(index: number, type: string): any {
    if (type === 'address') {
      const address = this.characterForm.get('address') as FormArray;
      return index === 0 && address.length === 1;
    }
    else if (type === 'ability') {
      const ability = this.characterForm.get('ability') as FormArray;
      return index === 0 && ability.length === 1;
    }
  }

  onSubmit(): void {
    const formData = this.characterForm.value;
    console.log(formData)
    let successMessage = '';
    let confirmButtonText = '';

    this.characterForm.markAllAsTouched();

    if (this.characterForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields with valid value!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    if (!this.id) {
      console.log("masuk");
      
      formData.id = uuidv4();

      console.log(formData.id);
      
      successMessage = 'Successfully added new data!';
      confirmButtonText = 'Yes, add it!';
      this.characterService.addNewCharacter(formData);
    } else {
      successMessage = 'Your data has been edited!';
      confirmButtonText = 'Yes, edit it!';
      this.characterService.updateCharacter(formData);
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
        this.router.navigate(['/character']);
        this.dialogRef.close();
        Swal.fire('Submitted!', successMessage, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.dialogRef.close();
        Swal.fire('Cancelled', 'Your form is safe :)', 'error');
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
