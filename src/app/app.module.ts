import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieDetailComponent } from './components/pages/movie-detail/movie-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { InformationBoxComponent } from './components/information-box/information-box.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { LoadingBoxComponent } from './components/loading-box/loading-box.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';


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
    LoadingBoxComponent,
    FilterPipe,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
