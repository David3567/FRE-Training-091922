import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

//* ~~~~~~~~~~~~~~~~~~~ Load Todos ~~~~~~~~~~~~~~~~~~~
//& trigger the effect
export const loadTodoList = createAction('[ Todos ] Load TodoList');

//& returned from the effect
export const loadTodosSuccess = createAction(
  '[ Todos ] Load TodoList Successful',
  props<{ todolist: Todo[] }>()
);
export const loadTodosFailure = createAction(
  '[ Todos ] Load TodoList Failed',
  props<{ err: string }>()
);

//* ~~~~~~~~~~~~~~~~~~~ AddTodo ~~~~~~~~~~~~~~~~~~~
export const addTodo = createAction(
  '[ Todos ] AddTodoList',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[ Todos ] AddTodo Successful',
  props<{ todo: Todo }>()
);
export const addTodoFailure = createAction(
  '[ Todos ] AddTodo Failed',
  props<{ err: string }>()
);
