import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesSliderComponent } from './movies-slider/movies-slider.component';
import { SelectedMovieDetailsComponent } from './selected-movie-details/selected-movie-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SeriesComponent } from './series/series.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesSliderComponent,
    SelectedMovieDetailsComponent,
    SearchResultsComponent,
    NavSidebarComponent,
    FooterComponent,
    ImprintComponent,
    SeriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    SlickCarouselModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
