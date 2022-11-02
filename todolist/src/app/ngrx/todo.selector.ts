import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo, TodoState } from '../interfaces/todo.interface';

const selectTodo = createFeatureSelector<TodoState>('todos');

export const todoListSelector = createSelector(
  selectTodo,
  (selector: TodoState): Todo[] => selector.todolist
);
