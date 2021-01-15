import { Component } from '@angular/core';
import {MoviesService} from "./movies.service";
import {Router} from "@angular/router";

/**
 *
 *
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WookieMovies';
  searchText;
constructor(private router: Router){

}

  /**
   *
   *
   * @memberof AppComponent
   */
  getMovie(){
    this.router.navigate(['/home'], { queryParams : { movie : this.searchText}});

  }
}
