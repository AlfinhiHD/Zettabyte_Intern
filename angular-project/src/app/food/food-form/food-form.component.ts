import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { FoodService } from '../food.service';
import { FoodFormInit } from '../model/foodForm';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss'],
})
export class FoodFormComponent implements OnInit {
  foodForm: FormGroup;
  id: string;

  isFrench: boolean = false;

  constructor(
    private fb: FormBuilder,
    private foodService: FoodService,
    private router: Router,
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.foodForm = FoodFormInit(this.fb);

    this.route.queryParams.subscribe((queryParams) => {
      this.id = queryParams['id'];
      console.log(this.id);
      if (!this.id) {
        this.foodForm.reset();
      } else {
        const food = this.foodService.getFoodById(this.id);
        console.log(food);

        if (food) {
          this.foodForm.patchValue(food);
          this.setArrayData(food.ingredients);
        }
      }
    });
  }

  toggleLanguage() {
    if (this.isFrench) {
      this.translateService.use('fr');
    } else {
      this.translateService.use('en');
    }
  }

  setArrayData(ingredients: any): void {
    const ingredientsFormArray = this.foodForm.get('ingredients') as FormArray;
    ingredients.forEach((ingredients: any, index: number) => {
      if (index === 0) {
        index++;
      } else {
        ingredientsFormArray.push(
          this.fb.group({
            name: [ingredients.name, Validators.required],
            type: [ingredients.type, Validators.required],
            price: [
              ingredients.price,
              [Validators.required, Validators.pattern(/^[0-9]*$/)],
            ],
            amount: [ingredients.amount, Validators.required],
          })
        );
      }
    });
  }

  addField(): void {
    const ingredients = this.foodForm.get('ingredients') as FormArray;
    ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        price: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        amount: ['', Validators.required],
      })
    );
  }

  removeField(index: number): void {
    const ingredients = this.foodForm.get('ingredients') as FormArray;
    if (ingredients && ingredients.length > index) {
      ingredients.removeAt(index);
    }
  }

  isFirstField(index: number): any {
    const ingredients = this.foodForm.get('ingredients') as FormArray;
    return index === 0 && ingredients.length === 1;
  }

  onSubmit(): void {
    const formData = this.foodForm.value;
    console.log(formData);
    let successMessage = '';
    let confirmButtonText = '';

    this.foodForm.markAllAsTouched();

    if (this.foodForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields with valid value!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    if (!this.id) {
      formData.id = uuidv4();
      successMessage = 'Successfully added new data!';
      confirmButtonText = 'Yes, add it!';
    } else {
      successMessage = 'Your data has been edited!';
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
        if (!this.id) {
          this.foodService.addNewFood(formData);
        } else {
          this.foodService.updateFood(formData);
        }
        this.router.navigate(['/food']);
        Swal.fire('Submitted!', successMessage, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your form is safe :)', 'error');
      }
    });
  }
}
