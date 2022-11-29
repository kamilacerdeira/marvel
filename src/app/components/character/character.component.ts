import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../data-access/marvel.service';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';
import { Character, Comic, Event, Series, Stories } from '../types';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  characterInfoIsLoading = false;
  characterId: number | undefined = undefined;
  character: Character = {};
  characterComics: Comic[] = [];
  characterSeries: Series[] = [];
  characterStories: Stories[] = [];
  characterEvents: Event[] = [];

  constructor(private service: MarvelService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getCharacter();
    this.getCharacterComics();
    this.getCharacterSeries();
    this.getCharacterStories();
    this.getCharacterEvents();
  }

  getCharacter() {
    this.characterInfoIsLoading = true;

    this.route.paramMap
      .pipe(
        first(),
        switchMap((params) => {
          const characterId = Number(params.get('characterId'));
          return this.service
            .getCharacter(characterId)
            .pipe(map((payload) => payload.data.results[0]));
        })
      )
      .subscribe((character) => {
        this.character = character;
        this.characterInfoIsLoading = false;
      });
  }

  getCharacterComics() {
    this.characterInfoIsLoading = true;

    this.route.paramMap
      .pipe(
        first(),
        switchMap((params) => {
          const characterId = Number(params.get('characterId'));
          return this.service
            .getCharacterComics(characterId)
            .pipe(map((payload) => payload.data.results));
        })
      )
      .subscribe((characterComics) => {
        this.characterComics = characterComics;
        this.characterInfoIsLoading = false;
      });
  }

  getCharacterSeries() {
    this.characterInfoIsLoading = true;

    this.route.paramMap
      .pipe(
        first(),
        switchMap((params) => {
          const characterId = Number(params.get('characterId'));
          return this.service
            .getCharacterSeries(characterId)
            .pipe(map((payload) => payload.data.results));
        })
      )
      .subscribe((characterSeries) => {
        this.characterSeries = characterSeries;
        this.characterInfoIsLoading = false;
      });
  }

  getCharacterStories() {
    this.characterInfoIsLoading = true;

    this.route.paramMap
      .pipe(
        first(),
        switchMap((params) => {
          const characterId = Number(params.get('characterId'));
          return this.service
            .getCharacterStories(characterId)
            .pipe(map((payload) => payload.data.results));
        })
      )
      .subscribe((characterStories) => {
        this.characterStories = characterStories;
        this.characterInfoIsLoading = false;
      });
  }

  getCharacterEvents() {
    this.characterInfoIsLoading = true;

    this.route.paramMap
      .pipe(
        first(),
        switchMap((params) => {
          const characterId = Number(params.get('characterId'));
          return this.service
            .getCharacterEvents(characterId)
            .pipe(map((payload) => payload.data.results));
        })
      )
      .subscribe((characterEvents) => {
        this.characterEvents = characterEvents;
        this.characterInfoIsLoading = false;
      });
  }
}
