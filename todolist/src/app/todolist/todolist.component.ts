import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../services/todolist.service';
import { Todo } from '../interfaces/todo.interface';
import { Observable } from 'rxjs';

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

  constructor(private todoService: TodolistService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe();
    this.todos$ = this.todoService.todos$;
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe();
  }
  addTodo() {
    this.todoService.addTodo(this.newTodo).subscribe();
  }
}
