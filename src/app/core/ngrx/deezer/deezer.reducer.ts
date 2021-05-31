import { Artist } from './../../models/models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as actions from './deezer.actions';

export const artistFeatureKey = 'artist';

export interface State extends EntityState<Artist> {}

export const adapter: EntityAdapter<Artist> = createEntityAdapter<Artist>();

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(actions.ReadArtistProfileSuccess, (state, { ...payload }) => {
    const newState = adapter.upsertOne(payload.artist, state);
    return newState;
  })
);
