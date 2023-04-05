import { Component } from '@angular/core';
import {UserInfo} from "./entities/user-info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-frontend';

  currentUser: UserInfo | undefined = undefined;

  isLoginOpen = false;

  showLogin() {
    this.isLoginOpen = true;
  }

  hideLogin() {
    this.isLoginOpen = false;
  }

  showView(view: string){

  }

  setUser(user: UserInfo) {
    this.currentUser = user;
  }

  logoutUser() {
    this.currentUser = undefined;
    this.showView('start');
  }
}
