import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent {

  public movieId!: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
  }

  currentUser(){
    return AppComponent.currentUser;
  }
}
