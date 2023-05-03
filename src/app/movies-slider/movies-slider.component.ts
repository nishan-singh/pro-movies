import { Component } from '@angular/core';
import { FetchdataService } from '../services/fetchdata.service';
import { Router } from '@angular/router';

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
  playSlider: boolean = true;

  moviesPoster: string = 'https://image.tmdb.org/t/p/original';

  constructor(private _apiservice: FetchdataService, private route: Router) {}

  ngOnInit() {
    this._apiservice.getTrendings().subscribe((res) => {
      this.trendingMoviesData = res;
      this.resultTrendingMovies = this.trendingMoviesData.results;
      this.setIntervalNextImage();
    });
  }

  // check Click
  checkClick() {
    this.playSlider = false;
    setTimeout(() => {
      this.playSlider = true;
    }, 15000);
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
      if (this.playSlider === true) {
        this.nextImage();
      }
    }, 4000);
  }

  // previous image
  prevImage() {
    if (this.currSliderImg > 0) {
      this.currSliderImg -= 100;
      this.playTransition = true;
    } else {
      this.currSliderImg = (this.resultTrendingMovies.length - 1) * 100;
      this.playTransition = false;
    }
  }

  // getSelectedMovie() {
  //   this.route.navigate(['selected-movie'], {
  //     queryParams: {

  //   });
  // }
}
