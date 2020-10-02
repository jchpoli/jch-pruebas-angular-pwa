import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@core/service/token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(request);
    request = this.addToken(request);
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>): HttpRequest<any> {
    const token: string = this.tokenService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: { token },
      });
    }
    return request;
  }
}
