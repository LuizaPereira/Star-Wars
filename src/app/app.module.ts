import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { InformationBoxComponent } from './components/information-box/information-box.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { LoadingBoxComponent } from './components/loading-box/loading-box.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BuildingPageComponent } from './pages/building-page/building-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailComponent,
    HomeComponent,
    AboutComponent,
    InformationBoxComponent,
    BackButtonComponent,
    LoadingBoxComponent,
    FilterPipe,
    ErrorPageComponent,
    BuildingPageComponent
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
