import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../movies.service";

/**
 *
 *
 * @export
 * @class DetailComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  movieIndex;
  movieDetail:any;
  loaded:boolean=false;
  constructor(private route: ActivatedRoute,private  moiveService: MoviesService) { }

  /**
   *
   *
   * @memberof DetailComponent
   */
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.movieIndex = params['movieIndex'];
        this.moiveService.getMovies().subscribe((response:any)=>{
          this.loaded=false;
          this.movieDetail=response.movies[this.movieIndex];
          this.loaded=true;
        })

      }
    });
  }


}
