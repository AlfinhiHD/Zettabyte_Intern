import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/service/menu/menu.service';

@Component({
  selector: 'app-totalprice-cart',
  templateUrl: './totalprice-cart.component.html',
  styleUrls: ['./totalprice-cart.component.scss'],
})
export class TotalpriceCartComponent implements OnInit {
  @Input() totalCartPrice: number = 0;

  constructor(private MenuService: MenuService) {}

  ngOnInit(): void {}

  payCart(): void {
    this.MenuService.submitCart();
  }
}
