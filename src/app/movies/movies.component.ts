import { Component } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';

import { map } from 'rxjs';
import { DatabaseService } from 'services/database.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  resultUpcoming: any;
  resultTVShows: any;
  resultMovies: any;
  resultTrending: any;
  resultRatedMovies: any;
  userUid: string;
  idFromUrl: string;

  moviesPoster: string = 'https://image.tmdb.org/t/p/w500';

  slideConfig = {
    slidesToShow: 5.5,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 3,
        },
      },
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
        breakpoint: 768,
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

  constructor(
    private _apiService: FetchDataService,
    private databaseService: DatabaseService,
    private activateRoute: ActivatedRoute,
    private route: Router
  ) {
    this.idFromUrl = this.activateRoute.snapshot.paramMap.get('uid');
    this.databaseService.checkUserStatus().subscribe((res) => {
      if (res) {
        this.userUid = res.uid;
      }
      if (!this.isUserAuthorized() && this.idFromUrl !== 'guest') {
        this.route.navigateByUrl('/');
      }
    });
  }

  isUserAuthorized(): boolean {
    return this.userUid === this.idFromUrl;
  }

  upcoming$ = this._apiService.getUpcoming(1).pipe(
    map((res) => {
      this.resultUpcoming = res;
      return this.resultUpcoming.results;
    })
  );

  TVShows$ = this._apiService.getTvShows(1).pipe(
    map((res) => {
      this.resultTVShows = res;
      return this.resultTVShows.results;
    })
  );

  trendingList$ = this._apiService.getTrending(1).pipe(
    map((res) => {
      this.resultTrending = res;
      return this.resultTrending.results;
    })
  );

  ratedMovies$ = this._apiService.getRatedMovies().pipe(
    map((res) => {
      this.resultRatedMovies = res;
      return this.resultRatedMovies.results;
    })
  );
}
