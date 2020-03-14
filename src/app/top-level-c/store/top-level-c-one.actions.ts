import { CONFIG } from './top-level-c-one.config';
import {createAction, props} from '@ngrx/store';

export const loadTodos = createAction(`[${CONFIG.NAME}] Load Todos`);
export const loadTodosSuccess = createAction(`[${CONFIG.NAME}] Load Todos Success`, props<{ payload }>());
