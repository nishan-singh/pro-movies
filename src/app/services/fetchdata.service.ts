import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchdataService {
  API_KEY = `api_key=978c12f041e8c2e186d9bec80f97f6a1`;
  BASE_URL = `https://api.themoviedb.org/3`;
  constructor(private _http: HttpClient) {}

  getMovies() {
    return this._http.get(
      `${this.BASE_URL}/discover/movie?${this.API_KEY}&language=en-US&sort_by=popularity.desc&include_video_language&page=1`
    );
  }

  getTrendings() {
    return this._http.get(
      `${this.BASE_URL}/trending/all/day?${this.API_KEY}&language=en-US&page=1`
    );
  }

  getSelectedMovie(id: number) {
    return this._http.get(
      `${this.BASE_URL}/movie/${id}?${this.API_KEY}&language=en-US`
    );
  }
}
