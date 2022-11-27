import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  publicKey = 'fc258a57ea026632af703f5658fb640f';

  constructor(private http: HttpClient) {}

  public getCharacters(offset?: number): Observable<any> {
    return this.http.get(`http://gateway.marvel.com/v1/public/characters`, {
      params: {
        apikey: this.publicKey,
        limit: 20,
        offset: offset ?? 0,
      },
    });
  }

  public getCharacter(characterId: number): Observable<any> {
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${characterId}`,
      {
        params: {
          apikey: this.publicKey,
        },
      }
    );
  }

  public getCharacterComics(characterId: number): Observable<any> {
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${characterId}/comics`,
      {
        params: {
          apikey: this.publicKey,
          limit: 100,
        },
      }
    );
  }

  public getCharacterSeries(characterId: number): Observable<any> {
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${characterId}/series`,
      {
        params: {
          apikey: this.publicKey,
          limit: 100,
        },
      }
    );
  }

  public getCharacterStories(characterId: number): Observable<any> {
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${characterId}/stories`,
      {
        params: {
          apikey: this.publicKey,
          limit: 100,
        },
      }
    );
  }

  public getCharacterEvents(characterId: number): Observable<any> {
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${characterId}/events`,
      {
        params: {
          apikey: this.publicKey,
          limit: 100,
        },
      }
    );
  }

  public searchCharacters(searchTerm: string): Observable<any> {
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchTerm}`,
      {
        params: {
          apikey: this.publicKey,
          limit: 100,
          offset: 0,
        },
      }
    );
  }
}
