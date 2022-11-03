import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';
import { AddTodoDto } from './dto/add-todo.dto';
import { QueryTodoDto } from './dto/query-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // @Get()
  // getAllTodos(): Todo[] {
  //   return this.todoService.getAllTodos();
  // }

  @Get()
  getTodos(@Query() queryTodoDto: QueryTodoDto): Todo[] {
    if (!Object.keys(queryTodoDto).length) {
      return this.todoService.getAllTodos();
    } else {
      return this.todoService.queryTodo(queryTodoDto);
    }
  }
  @Get('/:id')
  getTodoById(@Param('id') id: string): Todo {
    return this.todoService.getTodoById(id);
  }
  @Post()
  addTodo(@Body() addTodoDto: AddTodoDto): Todo {
    return this.todoService.addTodo(addTodoDto);
  }
  @Patch('/:id')
  editTodo(@Param('id') id: string, @Body() body) {
    this.todoService.patchTodo(id, body);
  }
}
