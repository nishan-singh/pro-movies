import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchdataService } from '../services/fetchdata.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-selected-movie-details',
  templateUrl: './selected-movie-details.component.html',
  styleUrls: ['./selected-movie-details.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class SelectedMovieDetailsComponent implements OnInit {
  movieDetails: any;
  selectedMovieVideoLinks: any;
  selectedMovieVideo: any;
  selectedMovieTrailer: any;
  player: any;
  videoId: any;

  constructor(
    private route: ActivatedRoute,
    private _apiservice: FetchdataService,
    private sanitizer: DomSanitizer
  ) {
    this.route.queryParams.subscribe((params) => {
      this.movieDetails = params;
    });
  }

  ngOnInit() {
    this.getSelectedMovieDetails();
  }

  getSelectedMovieDetails() {
    this._apiservice
      .getSelectedMovieTrailer(this.movieDetails['id'])
      .subscribe((data) => {
        this.selectedMovieVideoLinks = data;
        this.selectedMovieVideo = this.selectedMovieVideoLinks.results;
        this.selectedMovieTrailer = this.selectedMovieVideo.find(
          (element: any) => {
            return element.type === 'Trailer';
          }
        );
      });
  }

  getTrailer() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.selectedMovieTrailer?.key}`
    );
  }
}
