import { Album, Track } from './../../models/models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { Artist } from '../../models/models';
import { environment } from '../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  searchArtists(query: string): Observable<Artist[]> {
    const url = `${environment.API_URL}search/artist?q=${query}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      }),
      retry(1),
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    );
  }

  getArtistDetailsByID(id: number): Observable<Artist> {
    const url = `${environment.API_URL}artist/${id}`;
    return this.http.get<any>(url).pipe(
      retry(1),
      catchError((error) => {
        return this.handleError(error);
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
        return this.handleError(error);
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
        return this.handleError(error);
      })
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
      this.snackbar.open(errorMessage, '', { duration: 3000 });
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
