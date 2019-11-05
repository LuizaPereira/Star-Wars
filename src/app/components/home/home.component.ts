import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/movies.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[];

  constructor(private _http: MoviesService) { }

  ngOnInit() {
    this._http.getMovies().subscribe(
      (data: Movie) => {
        this.movies = data.results
        console.log(this.movies);
      }
    )
  }

  getCharacters() {
    //console.log(this.movies);
    this.movies.map(({ characters }) => {

      //this._http.getCharacters(characterUrl).subscribe(char => this.char.push(char)));
      console.log(characters);
    }
    )
  }
}
