import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Location } from '@angular/common';
import { Movies } from 'src/app/models/movies.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movies;

  constructor(
    private route: ActivatedRoute,
    private _http: MoviesService,
    private location: Location) {
  }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._http.getMovies().subscribe(
      (data: Movies) => {
        this.movie = data.results[id];
        console.log(this.movie);
      }
    )
  }

  goBack(): void {
    this.location.back();
  }
}
