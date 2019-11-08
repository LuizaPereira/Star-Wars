import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/movies.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[];
  movieSubscription: Subscription;

  constructor(private _http: MoviesService) { }

  ngOnInit() {
    this.movieSubscription = this._http.getMovies().subscribe(
      (data: Movie) => {
        this.movies = data.results;
      }
    )
  }

  ngOnDestroy() { this.movieSubscription.unsubscribe(); }
}
