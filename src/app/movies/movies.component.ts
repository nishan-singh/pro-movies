import { Component } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  receivedMovies: any;
  receivedTVShows: any;
  receivedUpcoming: any;
  receivedRatedMovies: any;
  resultMovies: any;
  resultTVShows: any;
  resultUpcoming: any;
  resultRatedMovies: any;
  moviesPoster: string = 'https://image.tmdb.org/t/p/w500';

  slideConfig = {
    slidesToShow: 5.5,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
    ],
  };

  constructor(private _apiService: FetchDataService) {}

  ngOnInit() {
    this._apiService.getUpcoming(1).subscribe((res) => {
      this.receivedUpcoming = res;
      this.resultUpcoming = this.receivedUpcoming.results;
    });
    this._apiService.getTvShows(1).subscribe((res) => {
      this.receivedTVShows = res;
      this.resultTVShows = this.receivedTVShows.results;
    });
    this._apiService.getTrending(1).subscribe((res) => {
      this.receivedMovies = res;
      this.resultMovies = this.receivedMovies.results;
    });
    this._apiService.getRatedMovies().subscribe((res) => {
      this.receivedRatedMovies = res;
      this.resultRatedMovies = this.receivedRatedMovies.results;
    });
  }
}
