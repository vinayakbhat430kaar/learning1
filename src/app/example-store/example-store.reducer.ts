// my-feature.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as MyFeatureActions from './example-store.action';

// my-feature.state.ts
export interface MyFeatureState {
    data: string[];
    // Add other properties as needed
}

export const initialState: MyFeatureState = {
    data: [],
    // Initialize other properties as needed
};


export const myFeatureReducer = createReducer(
    initialState,
    on(MyFeatureActions.addData, (state, { payload }) => {
        console.log("Executing the reducer");
        return { ...state, data: [...state.data, payload] }
    })
    // Add more reducer logic for other actions
);
