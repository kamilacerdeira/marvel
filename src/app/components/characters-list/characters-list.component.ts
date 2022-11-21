import { Component } from '@angular/core';
import { MarvelService } from '../../data-access/marvel.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  characters: any;

  constructor(private service: MarvelService) {
    this.getter();
  }

  getter() {
    this.service.getCharacters().subscribe((payload: any) => {
      this.characters = payload.data.results;
    });
  }

  characterImageUrl(path: string, extension: string): string {
    return path + '.' + extension;
  }

  characterDescription(description: string): string {
    const descriptionWith100Ch = description.slice(0, 100);

    if (description > descriptionWith100Ch) {
      return descriptionWith100Ch + '...';
    }

    if (description === '') {
      return 'This character does not have a description yet';
    }

    return descriptionWith100Ch;
  }
}
