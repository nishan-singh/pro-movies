import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-movie-details',
  templateUrl: './selected-movie-details.component.html',
  styleUrls: ['./selected-movie-details.component.scss'],
})
export class SelectedMovieDetailsComponent {
  @Input() selectedMovie: any = '';
}
