import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {
    this.fetchProducts();
  }

  ngOnInit(): void {}

  fetchProducts() {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
  deleteProduct(id: string): void {
    this.productsService
      .deleteProduct(id)
      .subscribe((res) => {
        this.products = this.products.filter((product) => product.id !== id);
      });
  }
}
