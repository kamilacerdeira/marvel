import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../data-access/marvel.service';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';
import { Character, Comic, Series } from '../types';

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
        console.log(this.characterComics);
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
        console.log(this.characterSeries);
      });
  }
}
