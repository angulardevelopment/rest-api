import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractApiService } from './abstract-api.service';

import { Observable } from 'rxjs';
import { placeHolder } from '../modals/placeholder';

@Injectable(
  {
  providedIn: 'root'
}
)
export class CarService extends AbstractApiService<placeHolder> {

  constructor(public http: HttpClient ) {
    super(http);
   }

   getAll(url): Observable<placeHolder[]> {
      return this.http.get<placeHolder[]>(url);
    }

    getOne(url): Observable<placeHolder[]> {
      return this.http.get<placeHolder[]>(url);
    }

    create(data: placeHolder): Observable<placeHolder> {
      return this.http.post<placeHolder>('', data);
    }


}
