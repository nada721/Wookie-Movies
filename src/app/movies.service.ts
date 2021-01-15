import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

/**
 *
 *
 * @export
 * @class MoviesService
 */
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  /**
   * @function getMovies()
   * @description get movies for data base
   * @returns
   * @memberof MoviesService
   */
  getMovies() {
    return this.http.get('https://wookie.codesubmit.io/movies', { headers: new HttpHeaders({'Authorization': 'Bearer Wookie2019'})
    });
  }

  /**
   * @function getSearchMovie()
   * @description get search movie
   * @returns
   * @memberof MoviesService
   */
  getSearchMovie(searchItem) {
    return this.http.get('https://wookie.codesubmit.io/movies?q=' + searchItem, { headers: new HttpHeaders({'Authorization': 'Bearer Wookie2019'})
    });
  }
}
