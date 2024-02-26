export interface FoodType {
  name: string;
  image: string;
  price: number;
}

export interface CartType {
  name: string;
  price: number;
  amount: number;
  totalPrice?: number;
  
}
