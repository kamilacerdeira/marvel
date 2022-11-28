import { Component, Input } from '@angular/core';
import { Comic, Series, Stories, Url } from '../types';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  noDetailsLink = false;
  @Input() isComicsContent = false;
  @Input() isSeriesContent = false;
  @Input() isStoriesContent = false;
  @Input() isEventsContent = false;
  @Input() contentArray: Comic[] | Series[] | Stories[] = [];

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

    if (this.isEventsContent) {
      return 'Events featuring this character';
    }

    return '';
  }

  cardImageUrl(path?: string, extension?: string): string {
    if (!path || !extension) {
      return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
    }
    return path + '.' + extension;
  }

  cardLink(urls?: Url[]): string | undefined {
    if (!urls || urls.length === 0) {
      this.noDetailsLink = true;
    }
    const detailUrl = urls?.find((url) => url.type === 'detail');
    return detailUrl?.url;
  }
}
