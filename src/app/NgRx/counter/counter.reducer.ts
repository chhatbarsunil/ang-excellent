import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const count:number = 8;

export const counterReducer = createReducer(
  count,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
