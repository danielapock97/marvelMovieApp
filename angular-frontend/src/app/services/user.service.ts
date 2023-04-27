import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../entities/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://192.168.1.116:8080/users'

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': '**/**',
    }),
  };
  constructor(private httpClient: HttpClient) {
    if (navigator.userAgent.includes("Android")) {
      this.apiUrl = "http://192.168.1.116:8080"
    } else {
      this.apiUrl = "http://localhost:8080"
    }

    this.apiUrl += "/users"
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl, this.httpOptions)
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + "/" + id)
  }
}
