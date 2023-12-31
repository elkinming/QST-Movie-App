import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Order, Sort } from 'src/app/interfaces/enumerations';
import { Movie } from 'src/app/interfaces/movie.interface';
import { Wishlist } from 'src/app/interfaces/wishlist';
import { MoviesService } from 'src/app/services/movies.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { badgeAnimation } from 'src/app/animations/badge.animation';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  animations: [
    badgeAnimation
  ]
})
export class MoviesListComponent {

  movies: Movie[] = [];
  wishlist: Wishlist[] = [];
  sortBy = new FormControl(Sort.byName);
  order = new FormControl(Order.ascending);

  constructor(
    private moviesService: MoviesService,
    private wishlistService: WishlistService,
    private router: Router,
  ){
    this.moviesService.clearSelectedMovie();
    this.getMovies();
    this.sortBy.valueChanges.subscribe(() => this.getMovies());
    this.order.valueChanges.subscribe(() => this.getMovies());
  }

  getMovies(){
    this.moviesService.getAllMovies().subscribe({
      next: (movies: Movie[]) => {
        this.movies = this.sortMovies(movies);
        this.getWishlist();
      },
      error: () => {
        console.error('Error getting the mock data');
        this.movies = [];
      }
    })
  }

  sortMovies(movies: Movie[]){

    if(this.sortBy.value === Sort.byName){
      if (this.order.value === Order.ascending) {
        movies.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        movies.sort((a, b) => b.title.localeCompare(a.title));
      }

    } else {
      if (this.order.value === Order.ascending) {
        movies.sort((a, b) => {
          a.releaseDateEpoch = new Date(a.releaseDate).valueOf();
          b.releaseDateEpoch = new Date(b.releaseDate).valueOf();
          return a.releaseDateEpoch - b.releaseDateEpoch
        });
      } else {
        movies.sort((a, b) => {
          a.releaseDateEpoch = new Date(a.releaseDate).valueOf();
          b.releaseDateEpoch = new Date(b.releaseDate).valueOf();
          return b.releaseDateEpoch - a.releaseDateEpoch
        });
      }
    }

    return movies;

  }

  getWishlist(){
    this.wishlist = this.wishlistService.getWishlist();
    this.checkMoviesInWishlist();
  }

  checkMoviesInWishlist(){
    this.movies.forEach((movie)=>{
      movie.isWishlist = false;
      this.wishlist.forEach((wishMovie) => {
        if (movie.title == wishMovie.title){
          movie.isWishlist = true;
        }
      })
    })
  }

  addToWishlist(movie: Movie){
    const wishItem: Wishlist = {
      title: movie.title
    }
    this.wishlist.push(wishItem);
    this.wishlistService.setWishlist(this.wishlist);
    movie.isWishlist = true;
  }

  removeFromWishlist(movie: Movie){
    this.wishlist = this.wishlist.filter((wishItem)=>{
      return movie.title != wishItem.title
    });
    this.wishlistService.setWishlist(this.wishlist);
    movie.isWishlist = false;
  }

  selectMovie(movie: Movie){
    this.moviesService.selectMovie(movie);
    this.router.navigateByUrl('/movie-details')
  }


}
