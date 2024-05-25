import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ApiService } from '../services/api.service';
import { environment } from '../../environments/environment';
import { AbstractApiService } from '../services/abstract-api.service';
// import { CarService } from '../services/car.service';
import { placeHolder } from '../modals/placeholder';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  // providers: [{ provide: AbstractApiService, useClass: CarService }],
})
export class BasicComponent implements OnInit {
  constructor(
    private api: ApiService,
    private abstract: AbstractApiService<any>
  ) {}

  ngOnInit(): void {
    this.samplejson();
  }

  test() {
    this.api.getRequest('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  httpParamUsage() {
    let params = new HttpParams();
    params = params.append('key', '18053707');

    // or
    let params2 = new HttpParams({
      fromObject: { arr: ['foo', 'bar', 'baz'] },
    });

    // or
    const params3 = new HttpParams()
      .set('a', 'value1')
      .set('b', 'value2')
      .set('etc', 'valueEtc');
  }

  samplejson() {
    // this.api.getRequest("assets/package.json")
    //   .subscribe(result => {
    //     console.log(result);
    //   });
    this.abstract.getOne('assets/package.json').subscribe((result) => {
      console.log(result, 'result');
    });
  }

  doSearch(term: string) {
    let apiURL = `${environment.itunesUrl}?term=${term}&media=music&limit=20`;
    this.api.getApi(apiURL).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //   GET /posts
  // GET /posts/1
  // GET /posts/1/comments
  // GET /comments?postId=1
  // POST /posts
  // PUT /posts/1
  // PATCH /posts/1
  // DELETE /posts/1

  getD() {
    this.api.getRequest('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  postD() {
    const d: placeHolder = {
      title: 'foo',

      body: 'bar',

      userId: 678,
    };
    this.api
      .postRequest('https://jsonplaceholder.typicode.com/posts', d)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateD() {
    const id = 1;
    const d = {
      id: 1,

      title: 'foo',

      body: 'fsdfsd',

      userId: 1,
    };
    this.api
      .putRequest(`https://jsonplaceholder.typicode.com/posts/${id}`, d)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteD() {
    const id = 1;
    this.api
      .deleteRequest(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getcach() {
    this.api.getBeerList().subscribe((res) => {
      console.log(res, 'res');
    });
  }
}
