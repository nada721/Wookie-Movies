import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  getMovies() {
    return this.http.get('https://wookie.codesubmit.io/movies', { headers: new HttpHeaders({'Authorization': 'Bearer Wookie2019'})
    });
  }
  getMovieDetails() {
    return this.http.get('https://wookie.codesubmit.io/movies', { headers: new HttpHeaders({'Authorization': 'Bearer Wookie2019'})
    });
  }
}