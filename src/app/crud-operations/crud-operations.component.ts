import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
import { AbstractApiService } from '../services/abstract-api.service';
@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.scss']
})
export class CrudOperationsComponent implements OnInit {

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {

  }

}
