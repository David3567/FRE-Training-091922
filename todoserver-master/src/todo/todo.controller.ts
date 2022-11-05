import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { AddTodoDto } from './dto/add-todo.dto';
import { QueryTodoDto } from './dto/query-todo.dto';
import { Todo } from './entities/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  // @Get()
  // getTodos(@Query() queryTodoDto: QueryTodoDto): Todo[] {
  //   console.log('query: ', typeof queryTodoDto.completed);
  //   if (!Object.keys(queryTodoDto).length) {
  //     return this.todoService.getAllTodos();
  //   } else {
  //     return this.todoService.queryTodo(queryTodoDto);
  //   }
  // }
  // @Get('/:id')
  // getTodoById(@Param('id') id: number): Todo {
  //   console.log(typeof id);
  //   return this.todoService.getTodoById(id);
  // }
  @Post()
  addTodo(@Body() addTodoDto: AddTodoDto): Promise<Todo> {
    return this.todoService.addTodo(addTodoDto);
  }
  // @Patch('/:id')
  // editTodo(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body('completed', ParseBoolPipe) completed: boolean,
  //   @Body('title') title: string,
  // ) {
  //   this.todoService.patchTodo(id, {
  //     completed,
  //     title,
  //   });
  // }
}
