import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  BASE_URL = environment.BASE_URL;
  movies: any;
  apiKey = environment.apiKey;

  headersToSend = new HttpHeaders(this.apiKey);

  constructor(private _http: HttpClient) {}

  getMovies(i: number) {
    return this._http.get(
      `${this.BASE_URL}/discover/movie?&language=en-US&sort_by=popularity.desc&include_video_language&page=${i}`,
      {
        headers: this.headersToSend,
      }
    );
  }

  getTvShows(i: number) {
    return this._http.get(
      `${this.BASE_URL}/tv/top_rated?&language=en-US&sort_by=popularity.desc&include_video_language&page=${i}`,
      {
        headers: this.headersToSend,
      }
    );
  }

  getTrending(i: number) {
    return this._http.get(
      `${this.BASE_URL}/movie/now_playing?&language=en-US&page=${i}`,
      {
        headers: this.headersToSend,
      }
    );
  }

  getUpcoming(i: number) {
    return this._http.get(
      `${this.BASE_URL}/movie/upcoming?&language=en-US&page=${i}`,
      {
        headers: this.headersToSend,
      }
    );
  }

  getSearchResults(name: string, i: number) {
    return this._http.get(
      `${this.BASE_URL}/search/multi?&language=en-US&query=${name}&page=${i}`,
      {
        headers: this.headersToSend,
      }
    );
  }

  getSelectedItemDetails(type: string, id: number) {
    return this._http.get(`${this.BASE_URL}/${type}/${id}?&language=en-US`, {
      headers: this.headersToSend,
    });
  }

  getSelectedItemTrailer(type: string, id: number) {
    return this._http.get(
      `${this.BASE_URL}/${type}/${id}/videos?&language=en-US`,
      {
        headers: this.headersToSend,
      }
    );
  }

  getTrendingTV() {
    return this._http.get(`${this.BASE_URL}/trending/tv/week?&language=en-US`, {
      headers: this.headersToSend,
    });
  }

  getRatedTV() {
    return this._http.get(`${this.BASE_URL}/tv/rated?&language=en-US`, {
      headers: this.headersToSend,
    });
  }

  getRatedMovies() {
    return this._http.get(`${this.BASE_URL}/movie/top_rated?&language=en-US`, {
      headers: this.headersToSend,
    });
  }

  getRecommendations(mediaType: string, id: number) {
    return this._http.get(
      `${this.BASE_URL}/${mediaType}/${id}/recommendations?&language=en-US`,
      {
        headers: this.headersToSend,
      }
    );
  }
}
