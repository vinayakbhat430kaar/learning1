// my-feature.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as MyFeatureActions from './example-store.action';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class MyFeatureEffects {
    // Example effect

    constructor(private actions$: Actions) { }
}
