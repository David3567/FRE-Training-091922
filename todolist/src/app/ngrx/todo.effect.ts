import { Inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as TodoActions from './todo.action';

import { BASRURL } from '../app.module';
import { Todo } from '../interfaces/todo.interface';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {
  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodoList),
      mergeMap((_) => {
        return this.http.get<Todo[]>(this.baseUrl).pipe(
          map((todolist: Todo[]) => {
            return TodoActions.loadTodosSuccess({ todolist });
          }),
          catchError((err) => {
            return of(
              TodoActions.loadTodosFailure({ err: JSON.stringify(err) })
            );
          })
        );
      })
    );
  });
  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.addTodo),
      switchMap(({ todo: newtodo }) => {
        return this.http.post<Todo>(this.baseUrl, newtodo).pipe(
          map((todo: Todo) => {
            return TodoActions.addTodoSuccess({ todo });
          }),
          catchError((err) => {
            return of(TodoActions.addTodoFailure({ err: JSON.stringify(err) }));
          })
        );
      })
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient,
    @Inject(BASRURL) private baseUrl: string
  ) {}
}
