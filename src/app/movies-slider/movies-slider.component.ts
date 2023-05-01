import { Component } from '@angular/core';
import { FetchdataService } from '../services/fetchdata.service';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.scss'],
})
export class MoviesSliderComponent {
  trendingMoviesData: any;
  resultTrendingMovies: any;
  currSliderImg: number = 0;
  playTransition: boolean;

  moviesPoster: string = 'https://image.tmdb.org/t/p/original';

  constructor(private _apiservice: FetchdataService) {}

  ngOnInit() {
    this._apiservice.getTrendings().subscribe((res) => {
      this.trendingMoviesData = res;
      this.resultTrendingMovies = this.trendingMoviesData.results;
      this.setIntervalNextImage();
      console.log(this.resultTrendingMovies);
    });
  }

  // next image
  nextImage() {
    if (this.currSliderImg / 100 < this.resultTrendingMovies.length - 1) {
      this.currSliderImg += 100;
      this.playTransition = true;
    } else {
      this.playTransition = false;
      this.currSliderImg = 0;
    }
  }

  // setInterval for next image
  setIntervalNextImage() {
    setInterval(() => {
      this.nextImage();
    }, 4000);
  }

  // previous image
  prevImage() {
    if (this.currSliderImg > 0) {
      this.currSliderImg -= 100;
    } else {
      this.currSliderImg = this.resultTrendingMovies.length - 1;
    }
  }
  showMovieDetails(i: number) {
    this._apiservice.getSelectedMovie(i).subscribe((res) => {
      console.log(res);
    });
    // console.log(this.resultTrendingMovies[i]['original_title']);
  }
}
