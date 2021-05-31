import { Artist } from './../../models/models';
import { createAction, props } from '@ngrx/store';

export const ReqReadArtistProfile = createAction(
  '[Read Artist Profile]',
  props<{ id: number }>()
);

export const ReadArtistProfileSuccess = createAction(
  '[ReqReadArtistProfile] Read Artist Success',
  props<{ artist: Artist }>()
);

export const ReadArtistProfileFailure = createAction(
  '[ReqReadArtistProfile] Read Artist Failure',
  props<{ error: string }>()
);
