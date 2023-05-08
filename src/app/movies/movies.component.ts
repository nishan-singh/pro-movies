import { Component } from '@angular/core';
import { FetchdataService } from '../services/fetchdata.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  recievedMovies: any;
  recievedTVShows: any;
  recievedUpcoming: any;
  resultmovies: any;
  resultTVShows: any;
  resultUpcoming: any;
  moviesPoster: string = 'https://image.tmdb.org/t/p/w500';

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  constructor(private _apiservice: FetchdataService) {}

  ngOnInit() {
    this._apiservice.getTrendings(1).subscribe((res) => {
      this.recievedMovies = res;
      this.resultmovies = this.recievedMovies.results;
    });
    this._apiservice.getTvShows(1).subscribe((res) => {
      this.recievedTVShows = res;
      this.resultTVShows = this.recievedTVShows.results;
    });
    this._apiservice.getUpcoming(1).subscribe((res) => {
      this.recievedUpcoming = res;
      this.resultUpcoming = this.recievedUpcoming.results;
    });
  }
}
