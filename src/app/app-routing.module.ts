import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SelectedMovieDetailsComponent } from './selected-movie-details/selected-movie-details.component';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
