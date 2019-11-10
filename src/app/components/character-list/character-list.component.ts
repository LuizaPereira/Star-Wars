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
export class CharacterListComponent implements OnInit  {

  constructor(
    private route: ActivatedRoute,
    private _movies: MoviesService,
    private _characters: CharactersService) { }

  ngOnInit() {
    
  }
}
