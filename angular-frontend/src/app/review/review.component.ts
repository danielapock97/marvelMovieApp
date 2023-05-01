import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Review} from "../entities/review";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{
  @Input() review!: Review
  @Output() onDelete: EventEmitter<Review> = new EventEmitter<Review>()
  stars: string[] = [];

  ngOnInit() {
    this.setStars(this.review.rating)
  }

  setStars(rating: number): void {
    const starsCount = Math.round(rating);
    console.log(starsCount)
    this.stars =  Array(starsCount).fill('star');
  }

  showEditButton(): boolean
  {
    let result = true;
    if (AppComponent.currentUser?.role === "moderator") {
      result = false;
    } else if (AppComponent.currentUser?.id === this.review.userID) {
      result = false
    }
    return result;
  }

  delete(review: Review) {
    if (confirm("Willst du dieses Review wirklich löschen?")) {
      this.onDelete.emit(review)
    }
  }
}
