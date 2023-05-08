import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchdataService } from '../services/fetchdata.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-selected-movie-details',
  templateUrl: './selected-movie-details.component.html',
  styleUrls: ['./selected-movie-details.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class SelectedMovieDetailsComponent implements OnInit {
  isLoaded: boolean = false;
  recievedDetails: any;
  selectedMovieVideoLinks: any;
  selectedMovieVideo: any;
  selectedItemTrailer: any;
  itemDetails: any;
  mediaType: string = '';
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor(
    private route: ActivatedRoute,
    private _apiservice: FetchdataService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.recievedDetails = params;
    });
  }

  ngOnInit() {
    if (this.recievedDetails?.media_type === 'movie') {
      this.mediaType = 'movie';
    } else {
      this.mediaType = 'tv';
    }
    this.getSelectedMovieDetails();
  }

  getSelectedMovieDetails() {
    this._apiservice
      .getSelectedItemDetails(this.mediaType, this.recievedDetails['id'])
      .subscribe((data: any) => {
        this.itemDetails = data;
      });

    this._apiservice
      .getSelectedItemTrailer(this.mediaType, this.recievedDetails['id'])
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
}
