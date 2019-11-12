import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailComponent } from './components/pages/movie-detail/movie-detail.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { BuildingPageComponent } from './components/pages/building-page/building-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: BuildingPageComponent },
  { path: 'planets', component: BuildingPageComponent },
  { path: 'vehicles', component: BuildingPageComponent },
  { path: 'species', component: BuildingPageComponent },
  { path: 'spaceships', component: BuildingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
