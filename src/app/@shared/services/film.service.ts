import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  baseurl = 'http://localhost:9000';

  constructor(private http: HttpClient) { 

  }

  // GET
  getFilms(): Observable<Film> {
    return this.http
      .get<Film>(this.baseurl + '/film/');
  }

  //get 
  getFilm(id:any): Observable<Film> {
    return this.http
      .get<Film>(this.baseurl + '/film/' + id);
  }

  // POST
  createFilm(film:Film): Observable<Film> {
    return this.http.post<Film>(
      this.baseurl + '/film/',
      JSON.stringify(film)
    )
  }
  

}
