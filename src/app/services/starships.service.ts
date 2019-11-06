import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarships() {
    return this.http.get('https://swapi.co/api/starships/?format=json');
  }

  getStarshipByUrl(url) {
    return this.http.get(url);
  }
}

