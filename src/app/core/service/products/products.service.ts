import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../../../product.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(
      `${environment.url_api}/products/${id}`
    );
  }

  createProduct(produtc: Product): Observable<Product> {
    return this.httpClient.post<Product>(
      `${environment.url_api}/products`,
      produtc
    );
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<Product> {
    return this.httpClient.put<Product>(
      `${environment.url_api}/products/${id}`,
      changes
    );
  }

  deleteProduct(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${environment.url_api}/products/${id}`);
  }
}
