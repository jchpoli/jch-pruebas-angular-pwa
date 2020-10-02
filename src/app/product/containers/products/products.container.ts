import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@core/service/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: string) {
    console.log('sasa');
    console.log(`Product ${id}`);
  }

  fetchProducts() {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
}
