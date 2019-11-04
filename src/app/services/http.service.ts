import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://swapi.co/api/films/?format=json');
  }

  getCharacters(url) {
    return this.http.get(url);
  }
}
