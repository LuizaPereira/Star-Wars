import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Movies } from 'src/app/models/movies.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movies[];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getMovies().subscribe(
      (data: Movies) => {
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
