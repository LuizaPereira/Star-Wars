import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from 'src/app/models/movies.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private movies: Movie[];
  public titles: String[] = [];
  movieSubscription: Subscription;

  constructor(private _http: MoviesService) { }

  ngOnInit() {
    this.movieSubscription = this._http.getMovies().subscribe((data: Movie) => {
      this.movies = data.results;
      this.movies.map(data => {
        this.titles.push(`Episode ${data.episode_id.toString()} : ${data.title}`);
      });
    });
  }

  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
  }
}
