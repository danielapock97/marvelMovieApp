import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.scss']
})
export class ViewAdminComponent {
  constructor(private router: Router ) {
    if(!AppComponent.currentUser || AppComponent.currentUser.role !== 'admin') {
      this.router.navigate(['/start']);
    }
  }

  currentUser(){
    return AppComponent.currentUser;
  }

}
