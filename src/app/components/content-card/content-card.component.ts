import { Component, Input } from '@angular/core';
import { Comic } from '../types';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  @Input() cardImage = '';
  @Input() contentArray: Comic[] = [];

  constructor() {}

  comicImageUrl(path?: string, extension?: string): string {
    return path + '.' + extension;
  }
}
