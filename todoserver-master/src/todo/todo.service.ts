import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { AddTodoDto } from './dto/add-todo.dto';
import { QueryTodoDto } from './dto/query-todo.dto';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      completed: true,
    },
  ];

  getAllTodos(): Todo[] {
    return this.todos;
  }
  getTodoById(id: string): Todo {
    const todo = this.todos.find((todo) => +todo.id === +id);
    if (!todo) {
      throw new NotFoundException(`todo id: ${id} not found!`);
    }
    return todo;
  }
  queryTodo({ completed, query }: QueryTodoDto): Todo[] {
    let todos = this.getAllTodos();

    if (completed) {
      todos = todos.filter((todo) => String(todo.completed) === completed);
    }
    if (query) {
      todos = todos.filter((todo) => todo.title.includes(query));
    }

    return todos;
  }
  patchTodo(id, newtodo) {
    const todo = this.getTodoById(id);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1, {
      ...todo,
      ...newtodo,
    });
  }
  putTodo(id, newtodo) {
    const todo = this.getTodoById(id);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1, {
      ...newtodo,
    });
  }

  addTodo({ title }: AddTodoDto): Todo {
    const newtodo: Todo = {
      title,
      userId: 6,
      completed: false,
      id: uuid(),
    };
    this.todos.push(newtodo);

    return newtodo;
  }
}
