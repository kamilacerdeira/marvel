import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../data-access/marvel.service';
import { ActivatedRoute } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  characterId: number | null = null;
  character: any;

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
  }
}
