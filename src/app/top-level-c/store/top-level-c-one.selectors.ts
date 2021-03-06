import {createFeatureSelector, createSelector} from '@ngrx/store';
import { CONFIG } from './top-level-c-one.config';
import {TopLevelCState} from './top-level-c-one.reducers';

export const selectFeature = createFeatureSelector<TopLevelCState>(CONFIG.KEY);

export const selectFeatureFormState = createSelector(
  selectFeature,
  (state) => state.myForm
);
