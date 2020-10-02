import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { Product } from '@core/models/product.model';
import { environment } from 'src/environments/environment';

interface User {
  gender?: string;
  email?: string;
  phone?: string;
}

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

  getRandomUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>('https://randomuserr.me/api/?results=2')
      .pipe(
        // Reintentar 3 veces más, es decir en total hace la petición 4
        retry(3),
        catchError((error) => this.handleError(error)),
        map((response: any) => response.results as User[])
      );
  }

  getFile(): Observable<any> {
    return this.httpClient.get('assets/miarchivo.txt', {
      responseType: 'text',
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('Ups algo salio mal');
  }
}
