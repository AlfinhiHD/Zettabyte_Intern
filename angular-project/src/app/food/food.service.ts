import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FoodType } from './model/foodType';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private food: BehaviorSubject<FoodType[]> = new BehaviorSubject<
    FoodType[]
  >([]);
  food$ = this.food.asObservable();

  constructor(private http: HttpClient) {
    this.getfoods();
  }

  getfoods(): void {
    this.http.get<FoodType[]>('../../../assets/food.json').subscribe({
      next: (foods: FoodType[]) => {
        console.log(foods);
        this.food.next(foods);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getfoodById(id: string) {
    return this.food.getValue().find((food) => food._id === id);
  }

  deletefood(id: string) {
    const foodList = this.food.getValue();
    const index = foodList.findIndex((food) => food._id === id);
    if (index !== -1) {
      foodList.splice(index, 1);
      this.food.next(foodList);
    }
  }

  addNewfood(newfood: FoodType) {
    console.log(newfood);
    
    this.food.next([...this.food.getValue(), newfood]);
  }

  updatefood(updatedfood: FoodType) {

    const food = this.food.getValue();
    const index = food.findIndex((food) => food._id === updatedfood._id);
    if (index !== -1) {
      food[index] = updatedfood;
      this.food.next([...food]);
    }
  }
}