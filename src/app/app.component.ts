import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  @ViewChild('main') main: ElementRef;

  ngAfterViewInit() {
    if (this.main) {
      this.main.nativeElement.scrollIntoView({ behavior: 'smooth' });
      console.log(
        this.main.nativeElement.scrollIntoView({ behavior: 'smooth' })
      );
    }
  }
}
