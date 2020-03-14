import { CONFIG } from './top-level-c-one.config';
import { createAction } from '@ngrx/store';

export const increment = createAction(`[${CONFIG.NAME}] Increment`);
export const decrement = createAction(`[${CONFIG.NAME}] Decrement`);
export const reset = createAction(`[${CONFIG.NAME}] Reset`);
