import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<any> {
    const publicKey = 'fc258a57ea026632af703f5658fb640f';

    return this.http.get(`http://gateway.marvel.com/v1/public/characters`, {
      params: {
        apikey: publicKey,
        limit: 10,
        offset: 0,
      },
    });
  }

  public getCharacter(characterId: number): Observable<any> {
    const publicKey = 'fc258a57ea026632af703f5658fb640f';

    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${characterId}`,
      {
        params: {
          apikey: publicKey,
        },
      }
    );
  }

  public getCharacterComics(characterId: number): Observable<any> {
    const publicKey = 'fc258a57ea026632af703f5658fb640f';

    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${characterId}/comics`,
      {
        params: {
          apikey: publicKey,
        },
      }
    );
  }
}
