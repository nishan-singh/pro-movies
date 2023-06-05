import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SelectedMovieDetailsComponent } from './selected-movie-details/selected-movie-details.component';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
  {
    path: 'selected-movie',
    component: SelectedMovieDetailsComponent,
  },
  {
    path: 'search-results',
    component: SearchResultsComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      useHash: true,
      anchorScrolling: 'enabled',
      scrollOffset: [0, 84],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
