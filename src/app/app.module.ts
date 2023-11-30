import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieDetailsComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
