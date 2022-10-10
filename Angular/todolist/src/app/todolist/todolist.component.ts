import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../services/todolist.service';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todolist: Todo[] = [];

  constructor(private todoService: TodolistService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todolist = todos;
    });
  }
}
