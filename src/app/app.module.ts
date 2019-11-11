import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { InformationBoxComponent } from './components/information-box/information-box.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { LoadingBoxComponent } from './components/loading-box/loading-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailComponent,
    CharacterListComponent,
    PlanetsListComponent,
    VehiclesListComponent,
    SpeciesListComponent,
    SpaceshipsListComponent,
    HomeComponent,
    AboutComponent,
    InformationBoxComponent,
    BackButtonComponent,
    LoadingBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
