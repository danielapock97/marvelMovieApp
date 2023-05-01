import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReviewFormComponent } from './edit-review-form.component';

describe('EditReviewFormComponent', () => {
  let component: EditReviewFormComponent;
  let fixture: ComponentFixture<EditReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReviewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
