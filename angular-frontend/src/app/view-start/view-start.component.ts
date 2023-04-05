import {Component, Input} from '@angular/core';
import {UserInfo} from "../entities/user-info";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-view-start',
  templateUrl: './view-start.component.html',
  styleUrls: ['./view-start.component.scss']
})
export class ViewStartComponent {


  constructor() {
  }

  currentUser(){
    return AppComponent.currentUser;
  }

}
