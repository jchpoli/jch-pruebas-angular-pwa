import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable(); // Que se comporte como un observable

  constructor() { }

  // Se crea una copia del objeto con un elemento mas y se notifica a los suscritos
  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
