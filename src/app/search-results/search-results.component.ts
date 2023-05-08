import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchdataService } from '../services/fetchdata.service';

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
    private _apiservice: FetchdataService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['q'];
      this.getResults();
    });
  }
  getResults() {
    this._apiservice.getSearchResults(this.searchTerm, 1).subscribe((res) => {
      this.recievedData = res;
      this.searchResults = this.recievedData.results;
    });
  }
}
