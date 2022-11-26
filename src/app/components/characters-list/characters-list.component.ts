import { Component } from '@angular/core';
import { MarvelService } from '../../data-access/marvel.service';
import { Character } from '../types';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  characters: Character[] = [];
  offset = 0;
  showLoadMoreButton = true;
  loadMoreButtonIsLoading = false;

  constructor(private service: MarvelService) {
    this.getCharacters();
  }

  getCharacters() {
    this.service
      .getCharacters()
      .pipe(first())
      .subscribe((payload: any) => {
        this.characters = payload.data.results;
      });
  }

  loadMoreCharacters() {
    this.offset = this.offset + 20;
    this.loadMoreButtonIsLoading = true;
    this.service
      .getCharacters(this.offset)
      .pipe(first())
      .subscribe((payload: any) => {
        this.characters = this.characters.concat(payload.data.results);
        this.loadMoreButtonIsLoading = false;
      });
  }

  characterImageUrl(path?: string, extension?: string): string {
    return path + '.' + extension;
  }

  characterDescription(description?: string): string {
    if (description !== undefined) {
      const descriptionWith100Ch = description.slice(0, 100);

      if (description > descriptionWith100Ch) {
        return descriptionWith100Ch + '...';
      }
      if (description === '') {
        return 'This character does not have a description yet';
      }
      return descriptionWith100Ch;
    }
    return 'undefined';
  }

  searchCharacter(searchTerm: string) {
    this.showLoadMoreButton = false;
    return this.service
      .searchCharacters(searchTerm)
      .subscribe((payload) => (this.characters = payload.data.results));
  }

  resetSearch() {
    this.showLoadMoreButton = true;
    return this.getCharacters();
  }
}
