import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies:any;
  constructor(private  moiveService: MoviesService) { }

  ngOnInit() {
    this.moiveService.getMovies().subscribe((movies:any) => {
      this.movies = movies.movies;
      console.log(movies);
    });
  }

}
