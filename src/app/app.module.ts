import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestInterceptor } from './test.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent
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
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

