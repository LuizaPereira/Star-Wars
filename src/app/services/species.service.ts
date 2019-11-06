import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpecies() {
    return this.http.get('https://swapi.co/api/species/?format=json');
  }

  getSpecieByUrl(url) {
    return this.http.get(url);
  }
}
