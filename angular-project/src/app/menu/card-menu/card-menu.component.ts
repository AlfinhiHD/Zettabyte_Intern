import { Component, Input, OnInit } from '@angular/core';
import { FoodType } from 'src/app/shared/helpers/interfaces';
import { MenuService } from 'src/app/shared/service/menu/menu.service';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss'],
})
export class CardMenuComponent implements OnInit {
  @Input() menu: FoodType;

  constructor(private MenuService: MenuService) {}

  ngOnInit(): void {
  }

  addToCart(foodItem: FoodType): void {
    this.MenuService.addToCart(foodItem);
  }
}
