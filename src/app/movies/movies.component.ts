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

  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
  ];

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
    this._apiservice.getMovies().subscribe((res) => {
      this.newData = res;
      this.resultmovies = this.newData.results;
      console.log(this.resultmovies);
    });
  }
}
