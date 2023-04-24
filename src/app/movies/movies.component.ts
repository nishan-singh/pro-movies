import { Component, inject, InjectionToken } from '@angular/core';
import { FetchdataService } from '../fetchdata.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  newData: any;
  resultmovies: any;

  moviesPoster: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _apiservice: FetchdataService) {}

  ngOnInit() {
    this._apiservice.getdata().subscribe((res) => {
      this.newData = res;
      this.resultmovies = this.newData.results;
      console.log(this.resultmovies[0].backdrop_path);
    });
  }
}
