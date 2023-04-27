import {Component, Input} from '@angular/core';
import {Movie} from "../entities/movie";

@Component({
  selector: 'app-main-view-list',
  templateUrl: './main-view-list.component.html',
  styleUrls: ['./main-view-list.component.scss']
})
export class MainViewListComponent {
  @Input() items!: Movie[];

  stars(rating: number): string[] {
    const starsCount = Math.round(rating);
    return Array(starsCount).fill('star');
  }
}
