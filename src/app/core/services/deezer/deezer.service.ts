import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artist } from '../../models/models';
@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  constructor(private http: HttpClient) {}

  searchArtists(query: string): Observable<Artist[]> {
    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${query}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  getArtistDetailsByID(id: number) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}
