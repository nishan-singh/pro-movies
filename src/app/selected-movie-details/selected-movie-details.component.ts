import { Component, Injectable, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../services/fetch-data.service';
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
  receivedDetails: any;
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
    private _apiService: FetchDataService,
    private location: Location
  ) {
    this.route.queryParams.subscribe((params) => {
      this.receivedDetails = params;
      console.log(this.receivedDetails);
    });
  }

  ngOnInit() {
    this.getSelectedMovieDetails();
  }

  checkMediaType() {
    this.mediaType = this.receivedDetails['mediaType'] || 'movie';
    console.log(this.mediaType);
  }

  getSelectedMovieDetails() {
    this.checkMediaType();
    this._apiService
      .getSelectedItemDetails(this.mediaType, this.receivedDetails['id'])
      .subscribe((data: any) => {
        this.itemDetails = data;
      });

    this._apiService
      .getSelectedItemTrailer(this.mediaType, this.receivedDetails['id'])
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

  goBack() {
    this.location.back();
  }
}
