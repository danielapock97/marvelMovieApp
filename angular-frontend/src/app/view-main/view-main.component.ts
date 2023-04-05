import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.scss']
})
export class ViewMainComponent {
  constructor(private router: Router ) {
    if(!AppComponent.currentUser) {
      this.router.navigate(['/start']);
    }
  }

  currentUser(){
    return AppComponent.currentUser;
  }

}
