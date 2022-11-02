import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { Product1Component } from './components/product1/product1.component';
import { ContactComponent } from './components/contact/contact.component';
import { Product1DetailComponent } from './components/product1-detail/product1-detail.component';
import { HomeComponent } from './components/home/home.component';
import { Product2Component } from './components/product2/product2.component';
import { StaticComponent } from './components/static/static.component';
import { Product2DetailComponent } from './components/product2-detail/product2-detail.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { ProductService } from './services/product.service';

export const PRODCT = new InjectionToken<string>('');

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HomeComponent,
    Product1Component,
    Product2Component,
    StaticComponent,
    DynamicComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    ProductService,
    { provide: PRODCT, useClass: ProductService },
    { provide: 'baseUrl', useValue: 'http://locahost:4200', deps: [] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
