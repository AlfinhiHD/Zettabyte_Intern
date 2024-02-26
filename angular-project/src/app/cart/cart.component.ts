import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/service/menu/menu.service';
import { CartType } from '../shared/helpers/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList: CartType[] = []

  constructor(private MenuService: MenuService) { }

  ngOnInit(): void {
    this.MenuService.cart$.subscribe(cart => {
      this.cartList = cart
    })
  }



}
