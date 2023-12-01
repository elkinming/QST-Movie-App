import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private moviesService: MoviesService,
    private router: Router
  ){}

  get pageTitle() {
    const movieSelected = this.moviesService.getMovieSelected();
    if (movieSelected.title !== ''){
      return `Movie: ${movieSelected.title}`;

    } else {
      return "Movies List";
    }
  }

  gotoMoviesList () {
    this.router.navigateByUrl('/movies');
  }

}
