import { ErrorService } from './../error/error.service';
import { Album, Track } from './../../models/models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { Artist } from '../../models/models';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  constructor(private http: HttpClient, private error: ErrorService) {}

  searchArtists(query: string): Observable<Artist[]> {
    const url = `${environment.API_URL}search/artist?q=${query}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      }),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        return this.error.handleError(error);
      })
    );
  }

  getArtistDetailsByID(id: number): Observable<Artist> {
    const url = `${environment.API_URL}artist/${id}`;
    return this.http.get<Artist>(url).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        return this.error.handleError(error);
      })
    );
  }

  getArtistTracks(id: number): Observable<Track[]> {
    const url = `${environment.API_URL}artist/${id}/top`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      }),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        return this.error.handleError(error);
      })
    );
  }

  getArtistAlbums(id: number): Observable<Album[]> {
    const url = `${environment.API_URL}artist/${id}/albums`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      }),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        return this.error.handleError(error);
      })
    );
  }
}
