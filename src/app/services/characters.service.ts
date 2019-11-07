import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(environment.characters);
  }

  getCharacterByUrl(url) {
    return this.http.get(url);
  }
}
