import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  /**
   * beforeEach, es algo que va a ejecutar antes de cada prueba
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      // Importa el modulo para óder ejecutar las pruebas
      imports: [HttpClientTestingModule],
    });
    /**
     * Se inyectan de manera manual los servicios
     */
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getAllProducts ', () => {
    it('should return products', () => {
      // Arrange
      const expectData = [
        {
          id: '1',
          title: 's',
          price: 22,
          description: 'holaa',
          image: 'laurl',
        },
        {
          id: '2',
          title: 't',
          price: 55,
          description: 'llllllllll',
          image: 'laurl 222',
        },
      ];
      // Act
      let dataError, dataResponse;
      service.getAllProducts().subscribe(
        (response) => {
          dataResponse = response;
        },
        (error) => {
          dataError = error;
        }
      );
      const req = httpTestingController.expectOne(
        `${environment.url_api}/products`
      );
      req.flush(expectData);
      // Assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
