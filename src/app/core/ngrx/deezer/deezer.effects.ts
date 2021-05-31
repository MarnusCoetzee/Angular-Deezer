import { DeezerService } from './../../services/deezer/deezer.service';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as actions from './deezer.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class ArtistEffects {
  ReqReadArtistProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.ReqReadArtistProfile),
      mergeMap((payload) => {
        return this.deezerService.getArtistDetailsByID(payload.id);
      }),
      mergeMap((artist) => {
        return [actions.ReadArtistProfileSuccess(artist)];
      }),
      catchError((error) => {
        return [actions.ReadArtistProfileFailure(error)];
      })
    )
  );

  constructor(
    private actions$: Actions,
    private deezerService: DeezerService
  ) {}
}
