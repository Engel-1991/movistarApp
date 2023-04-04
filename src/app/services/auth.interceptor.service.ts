import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token = "";
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Obtenemos el token de autorización del local storage o de donde lo tengas almacenado

    const authToken = localStorage.getItem('token');

    // Tu componente TypeScript export class YourComponent { token: string;

    // Si tenemos un token, agregamos la autorización Bearer a la solicitud
    if (authToken) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `${authToken}`),
      });
      return next.handle(authReq);
    }

    // Si no hay token, enviamos la solicitud original sin modificar
    return next.handle(request);
  }
}
