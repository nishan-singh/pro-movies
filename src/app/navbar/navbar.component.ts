import {
  Component,
  HostListener,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  screenWidth: number;
  showSearch: boolean = false;

  @ViewChild('searchInput') searchInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    return window.innerWidth < 650;
  }

  searchMovie() {
    if (this.onResize(window)) {
      this.showSearch = true;
      // this.searchInput.nativeElement.focus();
    } else {
      this.showSearch = false;
    }
  }
  closeSearchBar() {
    this.showSearch = false;
  }
}
