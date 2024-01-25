// my-feature.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MyFeatureState } from './example-store.reducer';

const selectMyFeatureState = createFeatureSelector<MyFeatureState>('exampleFeature');

export const selectData = createSelector(
    selectMyFeatureState,
    (state) => state.data
);
// Add more selectors as needed
