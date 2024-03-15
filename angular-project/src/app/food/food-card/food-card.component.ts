import { Component, Input, OnInit } from '@angular/core';
import { FoodType } from '../model/foodType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  @Input() food: FoodType

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    goToDetailFood(id: string) {
      this.router.navigate(['food/detail', id]);
    }

}
