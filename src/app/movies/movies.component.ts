import { Component, inject, InjectionToken } from '@angular/core';
import { FetchdataService } from '../services/fetchdata.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  newData: any;
  resultmovies: any;

  moviesPoster: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _apiservice: FetchdataService) {}

  ngOnInit() {
    this._apiservice.getMovies().subscribe((res) => {
      this.newData = res;
      this.resultmovies = this.newData.results;
    });
  }

  // make a function named presentation for a carousel of movies poster
  presentation(params: number) {
    return this.moviesPoster + params;
  }
}
