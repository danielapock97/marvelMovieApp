import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../services/movie.service";
import {Movie} from "../entities/movie";

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent {

  public movieId!: string;
  public movie?: Movie;
  stars: string[] = []

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieId = String(this.route.snapshot.paramMap.get('id'));
    this.getMovie();
  }

  setStars(rating: number): void {
    const starsCount = Math.round(rating);
    console.log(starsCount)
    this.stars =  Array(starsCount).fill('star');
  }

  currentUser(){
    return AppComponent.currentUser;
  }

  getMovie(): void {
    this.movieService.getMovieById(this.movieId).subscribe(
      res => {
        this.movie = res;
        this.setStars(res.rating)
      },
      error => (alert(JSON.stringify(error)))
    )
  }
}
