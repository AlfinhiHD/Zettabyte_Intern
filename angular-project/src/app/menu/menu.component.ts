import { Component, OnInit } from '@angular/core';
import { FoodType } from '../shared/helpers/interfaces';
import { MenuService } from '../shared/service/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  foodList: FoodType[] = [];

  constructor(private MenuService: MenuService) {}

  ngOnInit(): void {
    this.MenuService.food$.subscribe(food => {
      this.foodList = food
    })
  }
}
