import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  API_KEY = `api_key=978c12f041e8c2e186d9bec80f97f6a1`;
  BASE_URL = `https://api.themoviedb.org/3`;
  constructor(private _http: HttpClient) {}

  getMovies(i: number) {
    return this._http.get(
      `${this.BASE_URL}/discover/movie?${this.API_KEY}&language=en-US&sort_by=popularity.desc&include_video_language&page=${i}`
    );
  }

  getTvShows(i: number) {
    return this._http.get(
      `${this.BASE_URL}/tv/top_rated?${this.API_KEY}&language=en-US&sort_by=popularity.desc&include_video_language&page=${i}`
    );
  }

  getTrending(i: number) {
    return this._http.get(
      `${this.BASE_URL}/trending/all/day?${this.API_KEY}&language=en-US&page=${i}`
    );
  }

  getUpcoming(i: number) {
    return this._http.get(
      `${this.BASE_URL}/movie/upcoming?${this.API_KEY}&language=en-US&page=${i}`
    );
  }

  getSearchResults(name: string, i: number) {
    return this._http.get(
      `${this.BASE_URL}/search/multi?${this.API_KEY}&language=en-US&query=${name}&page=${i}`
    );
  }

  getSelectedItemDetails(type: string, id: number) {
    return this._http.get(
      `${this.BASE_URL}/${type}/${id}?${this.API_KEY}&language=en-US`
    );
  }

  getSelectedItemTrailer(type: string, id: number) {
    return this._http.get(
      `${this.BASE_URL}/${type}/${id}/videos?${this.API_KEY}&language=en-US`
    );
  }
}
