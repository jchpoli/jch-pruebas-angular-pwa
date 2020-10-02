import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '@core/service/products/products.service';
import { CustomValidator } from 'src/app/utils/CustomValidator';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe((product) => {
        this.form.patchValue(product);
      });
    });
  }

  updateProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productService
        .updateProduct(this.id, this.form.value)
        .subscribe((product) => {
          this.router.navigate(['./admin/products']);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, CustomValidator.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }
}
