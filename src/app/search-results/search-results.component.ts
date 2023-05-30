import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchTerm: string;
  recievedData: any;
  searchResults: any;
  moviesPoster: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private route: ActivatedRoute,
    private _apiService: FetchDataService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['q'];
      this.getResults();
    });
  }
  getResults() {
    this._apiService.getSearchResults(this.searchTerm, 1).subscribe((res) => {
      this.recievedData = res;
      this.searchResults = this.recievedData.results;
    });
  }
}
