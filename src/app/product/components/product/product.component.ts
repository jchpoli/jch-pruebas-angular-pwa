import {
  Component,
  Input,
  Output,
  EventEmitter,
  // OnChanges,
  OnInit,
  DoCheck,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { CartService } from 'src/app/core/service/cart/cart.service';
import { ProductsService } from '@core/service/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<string> = new EventEmitter();

  products: Product[];
  today = new Date();
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  /* ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges", changes);
  } */

  ngOnInit() {
    console.log('ngOnInit');
  }

  /**
   * Maneja los cmabios de modo personalizado, pero colisiona con
   * ngOnChanges
   */

  /*   ngDoCheck() {
    console.log('ngDoCheck');
  } */

  /*   ngOnDestroy(): void {
    console.log('OnDestroy');
  } */

  addCart() {
    console.log('Añadir al carrito');
    this.cartService.addCart(this.product);
    this.productClicked.emit(this.product.id);
    console.log('desúes de al carrito');
  }

  fetchProducts() {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }
}
