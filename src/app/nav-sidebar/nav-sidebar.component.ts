import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss'],
})
export class NavSidebarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('search', { static: false }) search: ElementRef;

  showSearch: boolean = false;
  hideNavbar: boolean = false;
  toggleLogout: boolean = false;
  searchInput: string = '';
  idFromUrl: string;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.idFromUrl = this.activeRoute.snapshot.paramMap.get('uid');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    return window.innerWidth < 650;
  }

  close() {
    this.sidenav.close();
    this.hideNavbar = false;
  }

  searchMovie() {
    if (this.onResize(window)) {
      this.showSearch = true;
      setTimeout(() => {
        this.search.nativeElement.focus();
      }, 0);
    } else {
      this.showSearch = false;
    }
    this.showResults();
  }

  showResults() {
    if (this.searchInput === '') return;
    this.router.navigate(['/user/' + this.idFromUrl + '/search-results'], {
      queryParams: { q: this.searchInput },
    });
    this.searchInput = '';
    this.closeSearchBar();
  }

  closeSearchBar() {
    this.showSearch = false;
  }

  hideNav() {
    this.hideNavbar = true;
  }

  toggleLogoutButton() {
    this.toggleLogout = !this.toggleLogout;
  }
}
