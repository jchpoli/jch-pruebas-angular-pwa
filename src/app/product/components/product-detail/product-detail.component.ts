import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '@core/service/products/products.service';
import { Product } from '@core/models/product.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => this.fecthProduct(params.id))
    );
  }

  fecthProduct(id: string) {
    return this.productsService.getProduct(id);
  }
  fecthRamdonUser() {
    this.productsService.getRandomUsers().subscribe(
      (users) => {
        console.log(users);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getFile() {
    this.productsService.getFile().subscribe((content) => {
      console.log(content);
      const blob = new Blob([content], {
        type: 'text/plain;charset=utf-8',
      });
      FileSaver.saveAs(blob, 'el-archivito-descargado.txt');
    });
  }
}
