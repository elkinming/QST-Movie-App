import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent,
    data: {animation: 'List'}
  },
  {
    path: 'movie-details',
    component: MovieDetailsComponent,
    data: {animation: 'Details'}
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
