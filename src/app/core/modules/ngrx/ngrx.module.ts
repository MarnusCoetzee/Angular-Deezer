import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { artistFeatureKey, reducer } from '../../ngrx/deezer/deezer.reducer';
import { ArtistEffects } from '../../ngrx/deezer/deezer.effects';
// import { reducers, metaReducers } from './reducers';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(artistFeatureKey, reducer),
    EffectsModule.forFeature([ArtistEffects]),
  ],
})
export class NgrxModule {}
