import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../data-access/marvel.service';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';
import { Character, Comic, Series, Stories } from '../types';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  characterId: number | undefined = undefined;
  character: Character = {};
  characterComics: Comic[] = [];
  characterSeries: Series[] = [];
  characterStories: Stories[] = [];

  constructor(private service: MarvelService, private route: ActivatedRoute) {}

  ngOnInit() {
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
      });

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
      });

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
      });

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
        console.log(this.characterStories);
      });
  }
}
