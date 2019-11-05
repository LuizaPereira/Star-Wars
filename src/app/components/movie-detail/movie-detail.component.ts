import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Location } from '@angular/common';
import { Movie } from 'src/app/models/movies.model';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  charactersUrl: [];
  characters: Character[] = [];

  constructor(
    private route: ActivatedRoute,
    private _movies: MoviesService,
    private _characters: CharactersService,
    private location: Location) {
  }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._movies.getMovies().subscribe(
      (data: Movie) => {
        this.movie = data.results[id];
        console.log(this.movie);
        this.getCharacters();
      }
    )
  }

  getCharacters(): void {
    this.charactersUrl = this.movie.characters;
    this.charactersUrl.map(data => {
      this.charactersUrl = data;
      this._characters.getCharactersByUrl(data).subscribe(
        (char: Character) => {
          this.characters.push(char)
        });
    });

    console.log(this.characters);

  }

  goBack(): void {
    this.location.back();
  }
}
