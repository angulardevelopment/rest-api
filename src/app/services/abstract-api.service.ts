import { HttpClient } from '@angular/common/http';
import { forwardRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CarService } from './car.service';
// Base service
@Injectable(
  {
  providedIn: 'root',
  useClass: forwardRef( () => CarService ) // Default implementation.

}
)
export abstract class AbstractApiService <T> {

    constructor(public readonly http: HttpClient) { }

    // getAll(url): Observable<T[]> {
    //   return this.http.get<T[]>(url);
    // }

    // getOne(url): Observable<T> {
    //   return this.http.get<T>(url);
    // }

    // create(data: T): Observable<T> {
    //   return this.http.post<T>('', data);
    // }

      public abstract getAll(url): Observable<T[]>;
      public abstract getOne(url): Observable<T[]>;
      public abstract create(url): Observable<T>;

}
