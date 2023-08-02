import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  idFromUrl: string;

  constructor(private activeRoute: ActivatedRoute) {
    this.idFromUrl = this.activeRoute.snapshot.paramMap.get('uid');
  }
}
