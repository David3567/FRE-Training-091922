import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';
  private todolist: Todo[] = [];
  private todolist$ = new BehaviorSubject(this.todolist);
  todos$ = this.todolist$.asObservable();

  constructor(private readonly http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.baseUrl).pipe(
      <any>tap((todos: Todo[]) => {
        this.todolist = todos;
        this.todolist$.next(this.todolist);
      })
    ) as Observable<Todo[]>;
  }
  deleteTodo(id: string) {
    return this.http.delete([this.baseUrl, id].join('/')).pipe(
      <any>tap(() => {
        console.log(id);
        this.todolist = this.todolist.filter((todo: any) => +todo.id !== +id);
        this.todolist$.next(this.todolist);
      })
    );
  }
}
