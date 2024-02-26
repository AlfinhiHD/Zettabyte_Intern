import { Component, Input, OnInit } from '@angular/core';
import { CartType } from 'src/app/shared/helpers/interfaces';
import { MenuService } from 'src/app/shared/service/menu/menu.service';

@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
  styleUrls: ['./card-cart.component.scss']
})
export class CardCartComponent implements OnInit {
  @Input() cart: CartType;

  constructor(private MenuService: MenuService) { }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartType): void {
    this.MenuService.removeFromCart(cartItem);
  }

}
