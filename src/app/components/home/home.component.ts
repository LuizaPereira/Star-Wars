import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getMovies().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    }
    );
  }
}
