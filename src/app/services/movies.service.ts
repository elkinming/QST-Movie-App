import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  wishlist: Movie[] = [];
  private movieSelected: Movie = {
    description: '',
    duration: '',
    genre: '',
    imageName: '',
    rating: 0,
    releaseDate: '',
    title: '',
    trailerLink: ''
  };

  constructor(
    private http: HttpClient
  ) {}

  getAllMovies(): Observable<any> {
    return this.http.get('assets/mocks/mock.data.json');
  }

  getMovieSelected(): Movie {
    return this.movieSelected;
  }

  selectMovie(movie: Movie) {
    this.movieSelected = movie;
  }

  clearSelectedMovie(){
    this.movieSelected = {
      description: '',
      duration: '',
      genre: '',
      imageName: '',
      rating: 0,
      releaseDate: '',
      title: '',
      trailerLink: ''
    };
  }

}
