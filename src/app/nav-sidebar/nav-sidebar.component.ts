import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss'],
})
export class NavSidebarComponent {
  showSearch: boolean = false;
  hideNavbar: boolean = false;
  reason = '';
  searchInput;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  5;
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
      this.router.navigate(['/search-results'], {
        queryParams: { q: this.searchInput },
      });
      this.searchInput = '';
    }
  }

  closeSearchBar() {
    this.showSearch = false;
  }

  hideNav() {
    this.hideNavbar = true;
  }
}
