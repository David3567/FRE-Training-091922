import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { InputboxComponent } from './inputbox/inputbox.component';
import { BooklistComponent } from './booklist/booklist.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OnchangeComponent } from './onchange/onchange.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InputboxComponent,
    BooklistComponent,
    WishlistComponent,
    OnchangeComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
