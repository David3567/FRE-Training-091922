import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const addTodo = createAction(
  '[ Todos ] Add Todo',
  props<{ todo: Todo }>()
);
