import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { combineLatest, map } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  isVideoLoaded: boolean = false;
  isRecommendedLoaded: boolean = false;
  receivedDetails: any;
  selectedMovieVideo: any;
  selectedItemTrailer: any;
  recommendedResult: any;
  checkIfExist: boolean = false;
  getRecommendedMovies$: any;
  getLatestMovies$: any;
  moviesPoster: string = 'https://image.tmdb.org/t/p/w500';
  idFromUrl: string = '';

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
          slidesToShow: 3.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
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

  safeUrl: SafeResourceUrl = '';

  urlParams = combineLatest([this.route.paramMap]).pipe(
    map((combined) => {
      const params = combined;
      return { params };
    })
  );

  constructor(
    private route: ActivatedRoute,
    private _apiService: FetchDataService,
    private activateRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.idFromUrl = this.activateRoute.snapshot.paramMap.get('uid');
    this.route.queryParams.subscribe((params) => {
      this.receivedDetails = params;
      this.getRecommendationMedia();
      this.getSelectedMovieDetails();
    });
    this.isLoaded = true;
  }

  ngOnInit() {}

  getSelectedMovieDetails() {
    this.isVideoLoaded = false;
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
      .subscribe((data: any) => {
        this.selectedMovieVideo = data.results;
        this.selectedItemTrailer = this.selectedMovieVideo.find(
          (element: any) => {
            return element.type === 'Trailer';
          }
        );
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube-nocookie.com/embed/' +
            this.selectedItemTrailer?.key
        );
        this.isVideoLoaded = true;
      });
  }

  getRecommendationMedia() {
    this.isRecommendedLoaded = false;
    this.checkIfExist = false;
    this.getRecommendedMovies$ = this._apiService
      .getRecommendations(
        this.receivedDetails['media_type'],
        this.receivedDetails['id']
      )
      .pipe(
        map((data: any) => {
          if (data.results.length === 0) {
            this.checkIfExist = true;
            this.getUpcomingMovies();
          } else {
            return data.results;
          }
        })
      );
    this.isRecommendedLoaded = true;
  }

  getUpcomingMovies() {
    this.getLatestMovies$ = this._apiService.getTrending(1).pipe(
      map((res: any) => {
        return res.results;
      })
    );
  }
}
