import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Review} from "../entities/review";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReviewService} from "../services/review.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-edit-review-form',
  templateUrl: './edit-review-form.component.html',
  styleUrls: ['./edit-review-form.component.scss']
})
export class EditReviewFormComponent implements OnInit {

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
    this.route.paramMap.subscribe(
      params => {
        let reviewID = <string>params.get('id');
        this.getReviewById(reviewID)
      }
    )
  }

  getReviewById(reviewID: string) {
    this.reviewService.getReviewById(reviewID, "").subscribe(
      res => {
        this.currentReview = res;
        this.ReviewForm.patchValue(this.currentReview)
        console.log(res)
        // console.log(res.id)
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

    this.reviewService.getReviewById(this.currentReview.id, this.currentReview.updatedAt.toString()).subscribe(
      res => {
        this.reviewService.put(this.currentReview).subscribe(
          res => {
            if (confirm("Das Review wurde erfolgreich upgedated.")) {
              this.router.navigate(["details/" + this.currentReview.movieID]);
            } else {
              this.router.navigate(["details/" + this.currentReview.movieID]);
            }
          })
      },
      error => {
        if (error.status === 409) {
          if (confirm("Konflikt: Das Review wurde kürzlich bearbeitet. Bitte bearbeite es erneut, wenn du deine Änderungen speichern möchtest.")) {
            this.router.navigate(["details/" + this.currentReview.movieID]);
          } else {
            this.router.navigate(["details/" + this.currentReview.movieID]);
          }
        }
      }
    )
  }
}
