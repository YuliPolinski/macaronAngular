import { Injectable } from '@angular/core';
import {ProductItemsType} from "../types/product-items.type";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartItems: ProductItemsType[] = [];
  count: number = 0;
  totalPrice: number = 0;
}
