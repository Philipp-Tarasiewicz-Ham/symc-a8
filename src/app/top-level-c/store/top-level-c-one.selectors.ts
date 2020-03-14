import {createFeatureSelector, createSelector} from '@ngrx/store';
import { CONFIG } from './top-level-c-one.config';

export const selectFeature = createFeatureSelector<number>(CONFIG.KEY);

export const selectFeatureCount = createSelector(
  selectFeature,
  (state) => state
);
