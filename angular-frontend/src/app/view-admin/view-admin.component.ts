import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.scss']
})
export class ViewAdminComponent {
  constructor() {
  }

  currentUser(){
    return AppComponent.currentUser;
  }

}
