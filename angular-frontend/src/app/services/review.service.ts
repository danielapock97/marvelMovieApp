import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Review} from "../entities/review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://10.0.2.2:8080/users'

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': '**/**',
    }),
  };
  constructor(private httpClient: HttpClient) {
    if (navigator.userAgent.includes("Android")) {
      this.apiUrl = "http://10.0.2.2.116:8080"
    } else {
      this.apiUrl = "http://localhost:8080"
    }

    this.apiUrl += "/users"
  }

  getUsers(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.apiUrl, this.httpOptions)
  }

  getUserById(id: number): Observable<Review> {
    return this.httpClient.get<Review>(this.apiUrl + "/" + id)
  }
}
