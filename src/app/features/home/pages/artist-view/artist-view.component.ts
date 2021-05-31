import { LoadingService } from './../../../../core/services/loading/loading.service';
import { Album, Artist, Track } from './../../../../core/models/models';
import { Observable } from 'rxjs';
import { DeezerService } from './../../../../core/services/deezer/deezer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss'],
})
export class ArtistViewComponent implements OnInit {
  artist$: Observable<Artist>;
  albums$: Observable<Album[]>;
  tracks$: Observable<Track[]>;
  loading$ = this.loader.loading$;
  artistId: number = null;
  constructor(
    private _deezerService: DeezerService,
    private loader: LoadingService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.artistId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.artistId) {
      this.artist$ = this._deezerService.getArtistDetailsByID(this.artistId);
      this.albums$ = this._deezerService.getArtistAlbums(this.artistId);
      this.tracks$ = this._deezerService.getArtistTracks(this.artistId);
    }
  }
}
