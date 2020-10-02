import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';

import { ProductsService } from '@core/service/products/products.service';
import { CustomValidator } from 'src/app/utils/CustomValidator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$: Observable<string>;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private st: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productService
        .createProduct(this.form.value)
        .subscribe((product) => {
          this.router.navigate(['./admin/products']);
        });
    }
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const dir = `/images/products/${file.name}`; // Ruta de guardado
    console.log(dir);
    const fileRef = this.st.ref(dir);
    const task = this.st.upload(dir, file); // Subimos la imagen
    task.snapshotChanges().pipe(
      finalize(() => {// Cuando termine de subir
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log('la url es:', url);
          this.form.get('image').setValue(url);
        });
      })
    ).subscribe();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
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
