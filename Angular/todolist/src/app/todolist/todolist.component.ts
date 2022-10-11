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
  // todolist: Todo[] = [];
  // todos$!: Observable<Todo[]>;

  newTodo: Todo = {
    userId: 4,
    title: '',
    completed: false,
  };

  constructor(public todoService: TodolistService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe();
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe();
  }
  addTodo() {
    // this.todoService.addTodo(this.newTodo).subscribe();
  }
}
