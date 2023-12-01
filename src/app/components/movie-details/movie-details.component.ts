import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/interfaces/movie.interface';
import { Wishlist } from 'src/app/interfaces/wishlist';
import { MoviesService } from 'src/app/services/movies.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  wishlist: Wishlist[] = [];

  constructor(
    private moviesService: MoviesService,
    private wishlistService: WishlistService,
    private sanitizer: DomSanitizer
  ){
    this.wishlist = this.wishlistService.getWishlist();
  }

  get movieSelected(): Movie {
    return this.moviesService.getMovieSelected();
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

  get videoURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movieSelected.trailerLink);
  }
}
