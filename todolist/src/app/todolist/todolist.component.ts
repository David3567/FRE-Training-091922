import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as TodoSelectors from '../ngrx/todo.selector';
import * as TodoActions from '../ngrx/todo.action';

import { TodolistService } from '../services/todolist.service';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  newTodo: Todo = {
    userId: 4,
    title: '',
    completed: false,
  };

  constructor(
    // private todoService: TodolistService,
    //* ~~~~~~ Ngrx ~~~~~~~
    private store: Store
  ) {}

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe();
    // this.todos$ = this.todoService.todos$;

    //* ~~~~~~ Ngrx ~~~~~~~
    this.todos$ = this.store.select(TodoSelectors.todoListSelector);
  }

  deleteTodo(id: string) {
    // this.todoService.deleteTodo(id).subscribe();
  }
  addTodo() {
    // this.todoService.addTodo(this.newTodo).subscribe();

    //* ~~~~~~ Ngrx ~~~~~~~
    const id = Math.floor(Math.random() * 10000);
    this.store.dispatch(
      TodoActions.addTodo({
        todo: {
          id,
          ...this.newTodo,
        },
      })
    );
  }
}
