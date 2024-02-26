import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartType, FoodType } from '../../helpers/interfaces';
import { FoodData } from '../../helpers/data';

@Injectable({
  providedIn: 'root',
})
export class MenuService{
  food: BehaviorSubject<FoodType[]> = new BehaviorSubject<FoodType[]>([]);
  food$ = this.food.asObservable();

  cart: BehaviorSubject<CartType[]> = new BehaviorSubject<CartType[]>([]);
  cart$ = this.cart.asObservable();

  totalPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPrice.asObservable();

  constructor() {
    this.food.next([...this.food.getValue(), ...FoodData]);
  }

  addToCart(food: FoodType): void {
    const existingCartItem = this.cart
      .getValue()
      .find((cartItem) => cartItem.name === food.name);
    if (existingCartItem) {
      existingCartItem.amount++;
      existingCartItem.totalPrice =
        existingCartItem.amount * existingCartItem.price;
    } else {
      const newCartItem: CartType = {
        ...food,
        amount: 1,
        totalPrice: food.price,
      };
      this.cart.next([...this.cart.getValue(), newCartItem]);
    }
    this.updateTotalPrice();
  }

  removeFromCart(food: CartType): void {
    const existingCartItem = this.cart
      .getValue()
      .find((cartItem) => cartItem.name === food.name);
    if (existingCartItem) {
      if (existingCartItem.amount > 1) {
        existingCartItem.amount--;
        existingCartItem.totalPrice =
          existingCartItem.amount * existingCartItem.price;
      } else {
        const updatedCart = this.cart
          .getValue()
          .filter((cartItem) => cartItem.name !== food.name);
        this.cart.next(updatedCart);
      }
    }
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    const totalCartPrice = this.cart
      .getValue()
      .reduce((total, cartItem) => total + cartItem.totalPrice, 0);
    this.totalPrice.next(totalCartPrice);
  }

  submitCart(): void {
    alert(`Total price: Rp. ${this.totalPrice.getValue()}`);
    this.cart.next([]);
    this.totalPrice.next(0);
  }
}
