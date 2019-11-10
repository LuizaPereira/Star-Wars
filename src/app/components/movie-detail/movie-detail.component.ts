import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Location } from '@angular/common';
import { Movie } from 'src/app/models/movies.model';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';
import { Planet } from 'src/app/models/planets.model';
import { PlanetsService } from 'src/app/services/planets.service';
import { SpeciesService } from 'src/app/services/species.service';
import { StarshipsService } from 'src/app/services/starships.service';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Specie } from 'src/app/models/species.model';
import { Starship } from 'src/app/models/starships.model';
import { Vehicle } from 'src/app/models/vehicles.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: Movie;
  charactersUrl: [];
  planetsUrl: [];
  speciesUrl: [];
  starshipsUrl: [];
  vehiclesUrl: [];
  characters: Character[] = [];
  planets: Planet[] = [];
  species: Specie[] = [];
  starships: Starship[] = [];
  vehicles: Vehicle[] = [];
  detailSubscription: Subscription;

  public routes: any[] = [
    { path: 'characters', title: 'Characters' },
    { path: 'planets', title: 'Planets' },
    { path: 'species', title: 'Species' },
    { path: 'spaceships', title: 'Spaceships' },
    { path: 'vehicles', title: 'Vehicles' }
  ]

  constructor(
    private route: ActivatedRoute,
    private _movies: MoviesService,
    private _characters: CharactersService,
    private _planets: PlanetsService,
    private _species: SpeciesService,
    private _starships: StarshipsService,
    private _vehicles: VehiclesService,) {
  }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.detailSubscription = this._movies.getMovies().subscribe(
      (data: Movie) => {
        this.movie = data.results[id];
         this.getCharacters();
         this.getPlanets();
         this.getSpecies();
         this.getStarships();
         this.getVehicles();
      }
    )
  }

   getCharacters(): void {
     this.charactersUrl = this.movie.characters;
     this.charactersUrl.map(data => {
      this.charactersUrl = data;
       this._characters.getCharacterByUrl(data).subscribe(
         (char: Character) => {
           this.characters.push(char)
         });
     });
   }

   getPlanets(): void {
     this.planetsUrl = this.movie.planets;
     this.planetsUrl.map(data => {
       this.planetsUrl = data;
       this._planets.getPlanetByUrl(data).subscribe(
         (planet: Planet) => {
           this.planets.push(planet)
         });
     });
   }

   getSpecies(): void {
     this.speciesUrl = this.movie.species;
     this.speciesUrl.map(data => {
       this.speciesUrl = data;
       this._species.getSpecieByUrl(data).subscribe(
         (specie: Specie) => {
           this.species.push(specie)
         });
     });
   }

   getStarships(): void {
     this.starshipsUrl = this.movie.starships;
     this.starshipsUrl.map(data => {
       this.starshipsUrl = data;
       this._starships.getStarshipByUrl(data).subscribe(
         (starship: Starship) => {
           this.starships.push(starship)
         });
     });
   }

   getVehicles(): void {
     this.vehiclesUrl = this.movie.vehicles;
     this.vehiclesUrl.map(data => {
       this.vehiclesUrl = data;
       this._vehicles.getVehicleByUrl(data).subscribe(
         (vehicle: Vehicle) => {
           this.vehicles.push(vehicle)
         });
     });
   }

  ngOnDestroy() {
    this.detailSubscription.unsubscribe();
  }
}
