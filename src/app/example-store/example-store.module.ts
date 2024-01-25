import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { myFeatureReducer } from './example-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MyFeatureEffects } from './example-store.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('exampleFeature', myFeatureReducer),
    EffectsModule.forFeature([MyFeatureEffects])
  ]
})
export class ExampleStoreModule { }
