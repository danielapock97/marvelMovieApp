import {Component, Input, OnInit} from '@angular/core';
import {ReviewService} from "../services/review.service";
import {Review} from "../entities/review";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit{
  @Input() movieID!: string

  userID: string | undefined;
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {
  }
  ngOnInit() {
    this.userID = AppComponent.currentUser?.id
  }

  getReviews() {
    this.reviewService.getReviews().subscribe(
      res => {this.reviews = res;},
    error => alert(error.before)
    )
  }
}
