import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-selected-movie-details',
  templateUrl: './selected-movie-details.component.html',
  styleUrls: ['./selected-movie-details.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class SelectedMovieDetailsComponent {
  isLoaded: boolean = false;
  isRecommendedLoaded: boolean = false;
  receivedDetails: any;
  receivedRecommendations: any;
  selectedMovieVideoLinks: any;
  selectedMovieVideo: any;
  selectedItemTrailer: any;
  recommendedResult: any;
  moviesPoster: string = 'https://image.tmdb.org/t/p/w500';

  itemDetails: any;
  mode: ProgressSpinnerMode = 'determinate';

  navigationSubscription: any;

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
          slidesToShow: 4,
          slidesToScroll: 3,
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
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
    ],
  };

  urlParams = combineLatest([this.route.paramMap]).pipe(
    map((combined) => {
      const params = combined;
      return { params };
    })
  );

  constructor(
    private route: ActivatedRoute,
    private _apiService: FetchDataService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.receivedDetails = params;
      this.getRecommendationMedia();
      this.getSelectedMovieDetails();
    });
  }

  getSelectedMovieDetails() {
    this.isLoaded = false;
    this._apiService
      .getSelectedItemDetails(
        this.receivedDetails['media_type'],
        this.receivedDetails['id']
      )
      .subscribe((data: any) => {
        this.itemDetails = data;
      });

    this._apiService
      .getSelectedItemTrailer(
        this.receivedDetails['media_type'],
        this.receivedDetails['id']
      )
      .subscribe((data) => {
        this.selectedMovieVideoLinks = data;
        this.selectedMovieVideo = this.selectedMovieVideoLinks.results;
        this.selectedItemTrailer = this.selectedMovieVideo.find(
          (element: any) => {
            return element.type === 'Trailer';
          }
        );
        this.isLoaded = true;
      });
  }

  getRecommendationMedia() {
    this.isRecommendedLoaded = false;
    this._apiService
      .getRecommendations(
        this.receivedDetails['media_type'],
        this.receivedDetails['id']
      )
      .subscribe((data) => {
        this.receivedRecommendations = data;
        this.recommendedResult = this.receivedRecommendations.results;
        this.isRecommendedLoaded = true;
      });
  }
}
