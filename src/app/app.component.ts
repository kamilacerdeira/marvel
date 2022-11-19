import { Component } from '@angular/core';
import { MarvelService } from './data-access/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marvel';
  characters: any;

  constructor(private service: MarvelService) {
    this.getter();
  }

  getter() {
    this.service.getCharacters().subscribe((payload: any) => {
      this.characters = payload.data.results;
      console.log('DATA >>', payload);
      console.log('characters >>', this.characters);
    });
  }
}
