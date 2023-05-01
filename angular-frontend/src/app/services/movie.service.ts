import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../entities/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://10.0.2.2:8080/movies'

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': '**/**',
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {
    if (navigator.userAgent.includes("Android")) {
      this.apiUrl = "http://10.0.2.2:8080"
    } else {
      this.apiUrl = "http://localhost:8080"
    }

    this.apiUrl += "/movies"
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.apiUrl, this.httpOptions)
  }

  getMovieById(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(this.apiUrl + "/" + id)
  }
}
