import { Component, Input } from '@angular/core';
import { Comic } from '../types';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  @Input() isComicsContent = false;
  @Input() isSeriesContent = false;
  @Input() isStoriesContent = false;
  @Input() contentArray: Comic[] = [];

  constructor() {}

  get contentCardTitle(): string {
    if (this.isComicsContent) {
      return 'Comics with this character';
    }

    if (this.isSeriesContent) {
      return 'Series featuring this character';
    }

    if (this.isStoriesContent) {
      return 'Stories featuring this character';
    }

    return '';
  }

  cardImageUrl(path?: string, extension?: string): string {
    return path + '.' + extension;
  }
}
