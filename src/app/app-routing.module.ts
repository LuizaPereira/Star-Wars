import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/pages/movie-detail/movie-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'vehicles', component: VehiclesListComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'spaceships', component: SpaceshipsListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movies/:id', component: MovieDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
