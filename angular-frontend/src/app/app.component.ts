import { Component } from '@angular/core';
import {UserInfo} from "./entities/user-info";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-frontend';

  public static currentUser: UserInfo | undefined = undefined;

  constructor(private router: Router ) {
  }

  isLoginOpen = false;

  showLogin() {
    this.isLoginOpen = true;
  }

  hideLogin() {
    this.isLoginOpen = false;
  }

  showView(view: string){
    this.router.navigate(['/'+ view]);
  }

  setUser(user: UserInfo) {
    AppComponent.currentUser = user;
    if(user.role === "admin") {
      this.showView('admin');
    } else {
      this.showView('main');
    }
  }

  currentUser(){
    return AppComponent.currentUser;
  }

  logoutUser() {
    AppComponent.currentUser = undefined;
    this.showView('start');
  }
}
