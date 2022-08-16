import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http?: HttpClient) {

  }

  getApi(apiUrl, param?): Observable<any> {
    return this.http.get<any>(apiUrl, param);
  }

  getRequest(url, params = {}, headers = {}) {
    return this.http.get(url, { params, headers }).pipe(
      map(res => {
        return res;
      }), catchError(this.errorHandler))
  }

  getProm(apiURL){
  return this.http.get(apiURL).toPromise()
  // .then(
  //   res => {
  //     console.log(res)
      // this.results = res['results'].map(item => { return new SearchItem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId); });
      // this.results = res.json().results;           
      // resolve();        },        
      // msg => { // Error                   
      // reject(msg);        }      );  });  return promise;}
    // })
  }

  postRequest(url, params = {}, headers = {}) {
  return this.http.post(url, {params, headers }).pipe(
    map((res: any) => res));
  }
  

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }

}
