import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/service/menu/menu.service';
import { CartType } from '../shared/helpers/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartList: CartType[] = [];
  totalCartPrice: number = 0;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.cart$.subscribe((cart) => {
      this.cartList = cart;
    });
    this.menuService.totalPrice$.subscribe((totalPrice) => {
      this.totalCartPrice = totalPrice;
    })
  }
}
