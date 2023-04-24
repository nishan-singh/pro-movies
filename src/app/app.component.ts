import { Component, inject, InjectionToken } from '@angular/core';
import { FetchdataService } from './fetchdata.service';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'firebase-todo';
  newData: any;
  resultmovies: any;

  moviesPoster: string = 'https://image.tmdb.org/t/p/w500';
  // todos$: Observable<any>;
  // firestore: Firestore = inject(Firestore);

  // constructor() {
  //   const itemCollection = collection(this.firestore, 'todos');
  //   this.todos$ = collectionData(itemCollection);

  //   this.todos$.subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  // item$: Observable<Item[]>;
  // firestore: Firestore = inject(Firestore);

  // const itemCollection = collection(this.firestore, 'items');
  // this.item$ = collectionData(collection);
  constructor(private _apiservice: FetchdataService) {}

  ngOnInit() {
    this._apiservice.getdata().subscribe((res) => {
      this.newData = res;
      this.resultmovies = this.newData.results;
      console.log(this.resultmovies[0]);
    });
  }
}
