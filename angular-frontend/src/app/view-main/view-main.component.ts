import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";
import {MovieService} from "../services/movie.service";
import {Movie} from "../entities/movie";

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.scss']
})
export class ViewMainComponent implements OnInit{

  movies: Movie[] = [];
  constructor(private router: Router, private movieService: MovieService) {
    if(!AppComponent.currentUser) {
      this.router.navigate(['/start']);
    }
  }

  currentUser(){
    return AppComponent.currentUser;
  }

  ngOnInit() {
    this.getAllMovies();

  }

  getAllMovies(): void {
    this.movieService.getMovies().subscribe(
      res => {
        this.movies = res;
        console.log(this.movies)
      },
      error => alert(JSON.stringify(error))
    )
  }

}
