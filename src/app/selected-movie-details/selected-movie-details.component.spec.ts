import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMovieDetailsComponent } from './selected-movie-details.component';

describe('SelectedMovieDetailsComponent', () => {
  let component: SelectedMovieDetailsComponent;
  let fixture: ComponentFixture<SelectedMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedMovieDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
