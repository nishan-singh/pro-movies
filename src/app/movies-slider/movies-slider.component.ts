import { Component, ViewChild } from '@angular/core';
import { FetchdataService } from '../services/fetchdata.service';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.scss'],
})
export class MoviesSliderComponent {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  isLoaded: boolean = false;
  trendingMoviesData: any;
  resultTrendingMovies: any;

  moviesPoster: string = 'https://image.tmdb.org/t/p/w1280';

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    arrows: false,
  };

  constructor(private _apiservice: FetchdataService, private route: Router) {
    this._apiservice.getTrendings(1).subscribe((res) => {
      this.trendingMoviesData = res;
      this.resultTrendingMovies = this.trendingMoviesData.results;
    });
    this.isLoaded = true;
  }

  prevMovie() {
    this.slickModal.slickPrev();
  }

  nextMovie() {
    this.slickModal.slickNext();
  }
}
