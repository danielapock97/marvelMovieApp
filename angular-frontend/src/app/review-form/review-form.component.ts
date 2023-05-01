import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatFormFieldControl} from "@angular/material/form-field";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Review} from "../entities/review";
import {ReviewService} from "../services/review.service";
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: ReviewFormComponent}],
})
export class ReviewFormComponent implements OnInit{

  public currentReview!: Review;

  @Output()
  public onFormCancel = new EventEmitter<void>();

  @Output()
  public onFormSave = new EventEmitter<Review>();

  @Output()
  public currentReviewChange = new EventEmitter<Review>();

  ReviewForm = new FormGroup({
    id: new FormControl(''),
    movieID: new FormControl('', [Validators.required]),
    userID: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    rating: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(5)])
  });


  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.currentReview = {
      userID: "",
      movieID: "",
      id: "",
      title: "",
      description: "",
      rating: 0
    } as Review
    this.currentReview.userID = <string>AppComponent.currentUser?.id

    this.ReviewForm.patchValue({
      userID: this.currentReview.userID
      }
    )

    this.route.paramMap.subscribe(
      params => {
        this.currentReview.movieID = <string>params.get('movieID');
        console.log(this.currentReview.movieID)
        this.ReviewForm.patchValue({
          movieID: this.currentReview.movieID
        })
      }
    )
  }


  onSubmit(): void {
    this.currentReview.id = this.ReviewForm.value.id as string;
    this.currentReview.movieID = this.ReviewForm.value.movieID as string;
    this.currentReview.userID = this.ReviewForm.value.userID as string;
    this.currentReview.title = this.ReviewForm.value.title as string;
    this.currentReview.description = this.ReviewForm.value.description as string;
    this.currentReview.rating = this.ReviewForm.value.rating as number;

    this.reviewService.post(this.currentReview).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["details/" + res.movieID])
      }
    )
  }
}
