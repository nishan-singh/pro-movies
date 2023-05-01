import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showSearch: boolean = false;
  hideNavbar: boolean = false;
  reason = '';
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() {}

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    return window.innerWidth < 650;
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
    this.hideNavbar = false;
  }

  searchMovie() {
    if (this.onResize(window)) {
      this.showSearch = true;
    } else {
      this.showSearch = false;
    }
  }

  closeSearchBar() {
    this.showSearch = false;
  }

  hideNav() {
    this.hideNavbar = true;
  }
}
