import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestInterceptor } from './test.interceptor';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CrudOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TestInterceptor,
    multi: true
    },   {
      provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

