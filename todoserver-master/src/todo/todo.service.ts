import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { AddTodoDto } from './dto/add-todo.dto';
import { QueryTodoDto } from './dto/query-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  async getAllTodos(): Promise<Todo[]> {
    return await this.todosRepository.find();
  }
  // getTodoById(id: number): Todo {
  //   const todo = this.todos.find((todo) => +todo.id === +id);
  //   if (!todo) {
  //     throw new NotFoundException(`todo id: ${id} not found!`);
  //   }
  //   return todo;
  // }
  // queryTodo({ completed, query }: QueryTodoDto): Todo[] {
  //   let todos = this.getAllTodos();

  //   if (completed) {
  //     todos = todos.filter((todo) => todo.completed === completed);
  //   }
  //   if (query) {
  //     todos = todos.filter((todo) => todo.title.includes(query));
  //   }

  //   return todos;
  // }
  // patchTodo(id: number, { completed, title }: Todo) {
  //   const todo = this.getTodoById(id);
  //   const index = this.todos.indexOf(todo);
  //   this.todos.splice(index, 1, {
  //     ...todo,
  //     completed,
  //     title,
  //   });
  // }
  // putTodo(id, newtodo) {
  //   const todo = this.getTodoById(id);
  //   const index = this.todos.indexOf(todo);
  //   this.todos.splice(index, 1, {
  //     ...newtodo,
  //   });
  // }

  async addTodo({ title, completed }: AddTodoDto): Promise<Todo> {
    const newtodo: Todo = {
      title,
      completed,
      userId: 6,
      id: uuid(),
    };

    const todo = this.todosRepository.create(newtodo);
    await this.todosRepository.save(todo);

    return newtodo;
  }
}

/*  private todos: Todo[] = [
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
  ]; */
