import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { CharactersService } from 'src/app/services/characters.service';
import { Movie } from 'src/app/models/movies.model';
import { Character } from 'src/app/models/character.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy  {

  movie: Movie;
  charactersUrl: [];
  characters: Character[] = [];
  CharactersSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private _movies: MoviesService,
    private _characters: CharactersService) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const a = +this.route.snapshot.paramMap.get('id');
    console.log(a);

    this.CharactersSubscription = this._movies.getMovies().subscribe(
      (data: Movie) => {
        this.movie = data.results[a];
        this.getCharacters();
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

  ngOnDestroy() {
    this.CharactersSubscription.unsubscribe();
  }

}
