import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Movies', component: MovieDetailComponent },
  { path: 'Characters', component: CharacterListComponent },
  { path: 'Planets', component: PlanetsListComponent },
  { path: 'Vehicles', component: VehiclesListComponent },
  { path: 'Species', component: SpeciesListComponent },
  { path: 'Spaceships', component: SpaceshipsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
