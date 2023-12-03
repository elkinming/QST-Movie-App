import { Component } from '@angular/core';
import { slideAnimation } from './animations/route.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    slideAnimation
  ]
})
export class AppComponent {
  title = 'movies-list';
}
