import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BuildingPageComponent } from './pages/building-page/building-page.component';

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
