import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get('https://swapi.co/api/vehicles/?format=json');
  }

  getVehicleByUrl(url) {
    return this.http.get(url);
  }
}
