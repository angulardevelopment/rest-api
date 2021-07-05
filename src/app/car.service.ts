import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractApiService } from './abstract-api.service';
import { Car } from './basic/basic.component';

@Injectable({
  providedIn: 'root'
})
export class CarService extends AbstractApiService<Car> {

  constructor(http: HttpClient ) {
    super(http);
   }

}
