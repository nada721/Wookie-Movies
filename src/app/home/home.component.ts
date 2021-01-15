import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {ActivatedRoute, Router} from "@angular/router";


/**
 *
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies:any;
  loaded:boolean=false;
  searchText:any;
  notFound:boolean=false;
  constructor(private  moiveService: MoviesService,private router: Router ,private route: ActivatedRoute) { }

  /**
   *
   *
   * @memberof HomeComponent
   */
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.searchText = params ['movie'];
        if (this.searchText != null) {
          this.getMovie();
        }
        else {
          this.loaded=false;
          this.notFound = false;
          this.moiveService.getMovies().subscribe((movies: any) => {
            this.movies = movies.movies;
            this.loaded = true;
          });
        }
  }
  })
  }

  /**
   *
   *
   * @param {*} movieIndex
   * @memberof HomeComponent
   */
  goToDetails(movieIndex) {
    this.router.navigate(['/detail'], { queryParams : { movieIndex : movieIndex}});
  }

  /**
   *
   *
   * @memberof HomeComponent
   */
  getMovie(){
    this.moiveService.getSearchMovie(this.searchText).subscribe((response:any)=>{
      this.loaded=false;
      this.notFound = false;
      if(response.movies.length > 0){
        console.log(response)
        this.movies=response.movies;
        this.loaded=true;
        this.notFound = false;
      }
      else {
        this.notFound = true;
        this.loaded=true;
      }

    })
  }
}
