// my-feature.actions.ts
import { createAction, props } from '@ngrx/store';

export const addData = createAction('[MyFeature] Add Data', props<{ payload: string }>());
// Add more actions as needed
