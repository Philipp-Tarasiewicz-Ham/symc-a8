import { CONFIG } from './top-level-c-one.config';
import {createAction, props} from '@ngrx/store';

export const loadTodos = createAction(`[${CONFIG.NAME}] Load TODOs`);
export const loadTodosSuccess = createAction(`[${CONFIG.NAME}] TODOs Successfully Loaded`, props<{ payload }>());
