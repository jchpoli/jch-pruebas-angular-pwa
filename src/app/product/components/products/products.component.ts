import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../core/service/products/products.service';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
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
    this.productsService.getAllProducts()
      .subscribe(products => this.products = products );
  }
}
