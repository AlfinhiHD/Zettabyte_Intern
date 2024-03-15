import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';
import { FoodType } from './model/foodType';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  foodList: FoodType[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.food$.subscribe((food) => {
      this.foodList = food;
    })
  }

}
