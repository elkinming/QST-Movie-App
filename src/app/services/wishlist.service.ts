import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { Wishlist } from '../interfaces/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }

  setWishlist(wishlist: Wishlist[]) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }

  getWishlist(): Wishlist[]{
    return localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist') as string) : []
  }

}
