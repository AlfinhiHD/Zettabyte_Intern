import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FoodService } from './food.service';
import { FoodType } from './model/foodType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  foodList: FoodType[] = [];

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.foodService.food$.subscribe((food) => {
      this.foodList = food;
    })
  }

  onAddFood() {
    this.router.navigate(['/food/form']);
  }

}
