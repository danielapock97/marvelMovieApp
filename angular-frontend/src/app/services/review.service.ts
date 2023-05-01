import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Review} from "../entities/review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://10.0.2.2:8080/reviews'

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': '**/**',
      'Content-Type': 'application/json',
    }),
    params: new HttpParams(),
  };
  constructor(private httpClient: HttpClient) {
    if (navigator.userAgent.includes("Android")) {
      this.apiUrl = "http://10.0.2.2:8080"
    } else {
      this.apiUrl = "http://localhost:8080"
    }

    this.apiUrl += "/reviews"
  }

  getReviews(movieID: string, userID: string | undefined): Observable<Review[]> {
    if (userID !== undefined) {
      this.httpOptions.params.set('userID', userID)
    }
    this.httpOptions.params.set('movieID', movieID)
    return this.httpClient.get<Review[]>(this.apiUrl, this.httpOptions)
  }

  getReviewById(id: string, updatedAt: string): Observable<Review> {
    this.httpOptions.params.set('updatedAt', updatedAt)
    console.log(this.httpOptions)
    return this.httpClient.get<Review>(this.apiUrl + "/" + id, this.httpOptions)
  }

  post(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(this.apiUrl, review, this.httpOptions)
  }

  put(review: Review): Observable<Review> {
    const url = `${this.apiUrl}/${review.id}`;
    return this.httpClient.put<Review>(url, review, this.httpOptions);
  }

  deleteReview(review: Review): Observable<Review> {
    const url = `${this.apiUrl}/${review.id}`;
    return this.httpClient.delete<Review>(url, this.httpOptions);
  }
}
