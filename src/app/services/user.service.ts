import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  sendData(data: any): Observable<any> {
    return this.http
      .post(
        'https://e2eservices/ApiGestorDocumental/api/Inventarios/ObtenerInventario',
        data
      )
      .pipe(
        catchError((error) => {
          console.error(error);
          return throwError(error);
        })
      );
  }

  ObtenerGrabacion(data: any): Observable<any> {
    return this.http
      .post(
        'https://e2eservices/ApiGestorDocumental/api/Inventarios/DescargarArchivo',
        data
      )
      .pipe(
        catchError((error) => {
          console.error(error);
          return throwError(error);
        })
      );
  }
}

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   constructor(private Http: HttpClient) {
//     console.log('servicio Http:');
//   }
//   getUsers(): any {
//     return this.Http.get('https://e2eservices/ApiGestorDocumental/api/Inventarios/ObtenerInventario');
//   }
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   constructor(private Http: HttpClient) {
//     console.log('servicio Http:');
//   }
//   // getUsers(): any {
//   //   return this.Http.get('https://jsonplaceholder.typicode.com/users');
//   // }
//   sendData(data) {
//     return this.Http.post('https://jsonplaceholder.typicode.com/users', data);
//   }
// }