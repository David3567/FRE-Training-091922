import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { SelectallComponent } from './selectall/selectall.component';
import { CrossieldvalidationComponent } from './crossieldvalidation/crossieldvalidation.component';
import { CustomvalidatorComponent } from './customvalidator/customvalidator.component';
import { SetvalidatorComponent } from './setvalidator/setvalidator.component';
import { FormarrayComponent } from './formarray/formarray.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    SelectallComponent,
    CrossieldvalidationComponent,
    CustomvalidatorComponent,
    SetvalidatorComponent,
    FormarrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
