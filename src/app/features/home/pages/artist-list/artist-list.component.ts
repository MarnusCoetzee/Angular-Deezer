import { LoadingService } from './../../../../core/services/loading/loading.service';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { DeezerService } from './../../../../core/services/deezer/deezer.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Artist } from 'src/app/core/models/models';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  artistList$: Observable<Artist[]>;
  artistSearchControl = new FormControl();

  loading$ = this.loader.loading$;

  constructor(
    private _deezerService: DeezerService,
    private loader: LoadingService
  ) {}

  ngOnInit(): void {
    this.artistList$ = this.artistSearchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap((value) => {
        return this.handleSearchArtists(value);
      })
    );
  }

  handleSearchArtists(value: string) {
    if (value === '') {
      return of([]);
    }
    return this._deezerService.searchArtists(value);
  }
}
