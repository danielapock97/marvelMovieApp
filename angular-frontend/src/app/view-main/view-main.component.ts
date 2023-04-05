import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.scss']
})
export class ViewMainComponent {
  constructor() {
  }

  currentUser(){
    return AppComponent.currentUser;
  }

}
