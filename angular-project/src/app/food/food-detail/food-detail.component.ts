import { Component, Input, OnInit } from '@angular/core';
import { FoodType } from '../model/foodType';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {
  @Input() food: FoodType;

  constructor() { }

  ngOnInit(): void {
  }

}
