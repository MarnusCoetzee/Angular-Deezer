import { Album, Track } from './../../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist } from '../../models/models';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  constructor(private http: HttpClient) {}

  searchArtists(query: string): Observable<Artist[]> {
    const url = `${environment.API_URL}search/artist?q=${query}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  getArtistDetailsByID(id: number): Observable<Artist> {
    const url = `${environment.API_URL}artist/${id}`;
    return this.http.get<Artist>(url);
  }

  getArtistTracks(id: number): Observable<Track[]> {
    const url = `${environment.API_URL}artist/${id}/top`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  getArtistAlbums(id: number): Observable<Album[]> {
    const url = `${environment.API_URL}artist/${id}/albums`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}
