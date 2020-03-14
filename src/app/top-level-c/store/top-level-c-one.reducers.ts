import { createReducer, on } from '@ngrx/store';
import { loadTodosSuccess } from './top-level-c-one.actions';

export interface TopLevelCState {
  todos: any[];
}

export const initialState: TopLevelCState = {
  todos: []
};

const counterReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state, { payload }) => ({ todos: payload })),
);

export function reducer(action, state) {
  return counterReducer(action, state);
}
