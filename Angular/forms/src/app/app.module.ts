import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { SelectallComponent } from './selectall/selectall.component';

@NgModule({
  declarations: [AppComponent, TemplateformComponent, SelectallComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
