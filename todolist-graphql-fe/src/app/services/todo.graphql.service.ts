
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AddTodoGQL, GetTodosGQL, Todo, DeleteTodoInput } from './todoGraphql.service';

@Injectable({ providedIn: 'root' })
export class TodoGraphqlService {
  private todolist: Todo[] = [];
  private todolistSub$ = new BehaviorSubject(this.todolist);
  todolist$ = this.todolistSub$.asObservable();

  constructor(
    private readonly addTodoGql: AddTodoGQL,
    private readonly getTodosGQL: GetTodosGQL,
    private readonly apollo: Apollo
  ) { }

  getTodos() {
    return this.getTodosGQL.fetch()
      .pipe(
        tap((gqldata) => {
          const todos = gqldata.data.getTodos.todos as Todo[]
          this.todolist = [...todos].reverse();
          this.todolistSub$.next(this.todolist);
        })
      );
  }
  addTodo(todo: Todo) {
    return this.addTodoGql
      .mutate({
        addTodoInput: todo,
      })
      .pipe(
        tap((gqldata) => {
          const todo = gqldata.data?.addTodo.todo as Todo;
          this.todolist = [todo, ...this.todolist];
          this.todolistSub$.next(this.todolist);
        })
      );
  }
  // deleteTodo(id: string) {
  //   return this.apollo.mutate({
  //     mutation: gql`
  //       mutation DeleteTodo($input: DeleteTodoInput!) {
  //         deleteTodo(input: $input) {
  //           todo {
  //             id
  //           }
  //         }
  //       }
  //     `
  //   }).pipe(
  //     tap((gqldata) => {
  //       const id = gqldata.data.deleteTodo.todo.id
  //       this.todolist = this.todolist.filter((todo: any) => +todo.id !== +id);
  //       this.todolistSub$.next(this.todolist);
  //     })
  //   )
  // }
}
