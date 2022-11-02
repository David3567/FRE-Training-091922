import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../interfaces/todo.interface';
import * as TodoActions from './todo.action';

const todoState: TodoState = {
  todolist: [],
  err: '',
};

export const todoReducer = createReducer(
  todoState,
  //* ~~~~~~~~~~~~~~~~~~ Load Todos ~~~~~~~~~~~~~~~~~~
  on(TodoActions.loadTodosSuccess, (state, { todolist }) => {
    return {
      ...state,
      todolist: [...todolist].reverse(),
    };
  }),
  on(TodoActions.loadTodosFailure, (state, { err }) => {
    return {
      ...state,
      todolist: [],
      err,
    };
  }),

  //* ~~~~~~~~~~~~~~~~~~ Add Todo ~~~~~~~~~~~~~~~~~~
  on(TodoActions.addTodoSuccess, (state, { todo }) => {
    return {
      ...state,
      todolist: [todo, ...state.todolist],
    };
  }),
  on(TodoActions.addTodoFailure, (state, { err }) => {
    return {
      ...state,
      todolist: [],
      err,
    };
  })
);
