import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-view-list',
  templateUrl: './main-view-list.component.html',
  styleUrls: ['./main-view-list.component.scss']
})
export class MainViewListComponent {
  @Input() items!: RatingItem[];

  stars(rating: number): string[] {
    const starsCount = Math.round(rating);
    return Array(starsCount).fill('star');
  }
}

interface RatingItem {
  imageUrl: string;
  title: string;
  rating: number;
  id: number;
}
