import {Component, Input, OnInit} from '@angular/core';
import {ReviewService} from "../services/review.service";
import {Review} from "../entities/review";
import {AppComponent} from "../app.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit{
  @Input() movieID!: string;

  userID: string | undefined;
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.userID = AppComponent.currentUser?.id
    this.getReviews()
  }

  getReviews() {
    this.reviewService.getReviews(this.movieID, AppComponent.currentUser?.id).subscribe(
      res => {this.reviews = res;},
    error => alert(error.before)
    )
  }

  deleteReview(review: Review) {
    this.reviewService.deleteReview(review).subscribe(
      () =>
      {this.reviews = this.reviews.filter((r) => r.id !== review.id)}
  )}
}
