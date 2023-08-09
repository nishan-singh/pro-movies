import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../../services/fetch-data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchTerm: string;
  moviesPoster: string = 'https://image.tmdb.org/t/p/w500';
  idFromUrl: string;
  getLatestMovies$: any;
  getSearchResults$: any;
  checkIfEmpty: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _apiService: FetchDataService,
    private activeRoute: ActivatedRoute
  ) {
    this.idFromUrl = this.activeRoute.snapshot.paramMap.get('uid');
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['q'];
      this.getResults();
    });
  }

  getResults() {
    this.checkIfEmpty = false;
    this.getSearchResults$ = this._apiService
      .getSearchResults(this.searchTerm, 1)
      .pipe(
        map((res: any) => {
          if (res.results.length === 0) {
            this.checkIfEmpty = true;
            this.getUpcomingMovies();
          } else {
            return res.results;
          }
        })
      );
  }

  getUpcomingMovies() {
    this.getLatestMovies$ = this._apiService.getTrending(1).pipe(
      map((res: any) => {
        return res.results;
      })
    );
  }
}
