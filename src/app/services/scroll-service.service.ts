import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollServiceService {
  private scrollPositions: { [url: string]: number } = {};

  setScrollPosition(url: string, position: number): void {
    this.scrollPositions[url] = position;
  }

  getScrollPosition(url: string): number {
    return this.scrollPositions[url] || 0;
  }
}
