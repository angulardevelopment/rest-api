import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbstractApiService <T> {

    constructor(private readonly http: HttpClient) { }

    getAll(url): Observable<T[]> {
      return this.http.get<T[]>(url);
    }

    getOne(url): Observable<T> {
      return this.http.get<T>(url);
    }

    create(data: T): Observable<T> {
      return this.http.post<T>('', data);
    }
}
