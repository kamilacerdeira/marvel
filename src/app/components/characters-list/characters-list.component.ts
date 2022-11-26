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
  showNoCharactersFoundMessage = false;
  loadMoreButtonIsLoading = false;
  charactersAreLoading = false;

  constructor(private service: MarvelService) {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersAreLoading = true;
    this.service
      .getCharacters()
      .pipe(first())
      .subscribe((payload: any) => {
        this.characters = payload.data.results;
        this.charactersAreLoading = false;
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
      const descriptionWith60Ch = description.slice(0, 60);

      if (description > descriptionWith60Ch) {
        return descriptionWith60Ch + '...';
      }
      if (description === '') {
        return 'This character does not have a description yet';
      }
      return descriptionWith60Ch;
    }
    return 'undefined';
  }

  searchCharacter(searchTerm: string) {
    this.showLoadMoreButton = false;
    return this.service
      .searchCharacters(searchTerm)
      .pipe(first())
      .subscribe((payload) => {
        if (payload.data.results == 0) {
          this.showNoCharactersFoundMessage = true;
        }
        this.characters = payload.data.results;
      });
  }

  resetSearch() {
    this.showLoadMoreButton = true;
    this.characters = [];
    return this.getCharacters();
  }
}
