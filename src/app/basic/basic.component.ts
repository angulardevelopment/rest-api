import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  // GET /posts
// GET /posts/1
// GET /posts/1/comments
// GET /comments?postId=1
// POST /posts
// PUT /posts/1
// PATCH /posts/1
// DELETE /posts/1


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.samplejson();
  }
  httpParamUsage() {
    let params = new HttpParams();
    params = params.append("key", "18053707");

    // or
    let params2 = new HttpParams({
      fromObject: { arr: [ "foo", "bar", "baz" ] },
      });

    // or
      const params3 = new HttpParams()
     .set("a", 'value1')
     .set("b", 'value2')
     .set("etc", 'valueEtc');
  }


  samplejson() {
    this.api.getRequest("assets/package.json")
      .subscribe(result => {
        console.log(result);
      });
  }

  httpHeadersUsage(str: string, type = "artist", token: string) {
    const headers = new HttpHeaders({ "Authorization": "Bearer " + token });
 
  }

  getToken() {
    var params = ("grant_type=client_credentials");
    let headers = new HttpHeaders();
    const encoded = '';
    headers = headers.set("Authorization", "Basic " + encoded).set("Content-Type", "application/x-www-form-urlencoded");
    // "https://accounts.spotify.com/api/token"
  }

  doSearch(term: string) {
      let apiURL = `${environment.apiRoot2}?term=${term}&media=music&limit=20`; 

  }

  // getd(){
  // this.api.getApi().subscribe(res =>{
  //   console.log(res);
  //   }, error => {
  //   console.log(error)
  //   });
  // }

}
export interface Car {
  brand: string;
}



interface UserResponse {
  login: string;
  bio: string;
  company: string;
}

class SearchItem { constructor(public name: string, public artist: string, public link: string, public thumbnail: string, public artistId: string) { } }







