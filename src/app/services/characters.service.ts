import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get('https://swapi.co/api/people/?format=json');
  }

  getCharactersMovie(url) {
    return this.http.get(url);
  }
}
