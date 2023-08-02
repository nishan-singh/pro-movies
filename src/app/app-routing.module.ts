import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SelectedMovieDetailsComponent } from './selected-movie-details/selected-movie-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {
    path: '',
    component: LogInComponent,
  },
  {
    path: 'user/:uid',
    component: MoviesComponent,
  },
  {
    path: 'user/guest',
    component: MoviesComponent,
  },
  {
    path: 'user/:uid/selected-movie',
    component: SelectedMovieDetailsComponent,
  },
  {
    path: 'user/:uid/search-results',
    component: SearchResultsComponent,
  },
  {
    path: 'user/:uid/imprint',
    component: ImprintComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'top',
      useHash: true,
      anchorScrolling: 'enabled',
      scrollOffset: [0, 84],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
