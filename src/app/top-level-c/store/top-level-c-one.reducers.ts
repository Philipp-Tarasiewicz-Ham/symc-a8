import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './top-level-c-one.actions';

export interface TopLevelCState {
  count: number;
}

export const initialState: TopLevelCState = {
  count: 0
};

const counterReducer = createReducer(
  initialState,
  on(increment, state => ({ count: state.count + 1 })),
  on(decrement, state => ({ count: state.count - 1 })),
  on(reset, state => ({ count: 0 })),
);

export function reducer(action, state) {
  return counterReducer(action, state);
}
