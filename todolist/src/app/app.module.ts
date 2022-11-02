import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './ngrx/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './ngrx/todo.effect';

export const BASRURL = new InjectionToken<string>('');

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoitemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'TodoList Demo',
    }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [
    {
      provide: BASRURL,
      useValue: 'https://jsonplaceholder.typicode.com/todos',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
