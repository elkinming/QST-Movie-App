import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  wishlist: Movie[] = [];

  constructor(
    private http: HttpClient
  ) {
  }

  getAllMoviesSorted(): Observable<any> {
    return this.http.get('assets/mocks/mock.data.json');
  }

}
