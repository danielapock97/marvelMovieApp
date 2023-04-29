import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../entities/review";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{
  @Input() review!: Review
  stars: string[] = [];

  ngOnInit() {
    this.setStars(this.review.rating)
  }

  setStars(rating: number): void {
    const starsCount = Math.round(rating);
    console.log(starsCount)
    this.stars =  Array(starsCount).fill('star');
  }
}
