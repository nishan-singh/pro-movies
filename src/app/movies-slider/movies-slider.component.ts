import { Component, ViewChild } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { map } from 'rxjs';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.scss'],
})
export class MoviesSliderComponent {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  isLoaded: boolean = false;
  resultTrendingMovies: any;
  idFromUrl: string;

  moviesPoster: string = 'https://image.tmdb.org/t/p/w1280';

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    arrows: false,
  };

  trendingMovies$ = this._apiService.getTrending(1).pipe(
    map((res) => {
      this.resultTrendingMovies = res;
      return this.resultTrendingMovies.results;
    })
  );

  constructor(
    private _apiService: FetchDataService,
    private route: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.isLoaded = true;
    this.idFromUrl = this.activateRoute.snapshot.paramMap.get('uid');
  }

  prevMovie() {
    this.slickModal.slickPrev();
  }

  nextMovie() {
    this.slickModal.slickNext();
  }
}
