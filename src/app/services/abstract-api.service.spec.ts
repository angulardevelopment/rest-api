import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { AbstractApiService } from './abstract-api.service';

describe('AbstractApiService', () => {
  let service: AbstractApiService<MethodPayload<Observable<Response>>>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
type MethodPayload<T> = {
    something: string;
    data: T;
  }
