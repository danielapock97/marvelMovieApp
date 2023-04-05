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
    if(AppComponent.currentUser) {
      this.router.navigate(['/'+ view]);
    }
    else {
      this.router.navigate(['/start']);
    }
  }

  setUser(user: UserInfo) {
    AppComponent.currentUser = user;
    this.showView('main');
  }

  currentUser(){
    return AppComponent.currentUser;
  }

  logoutUser() {
    AppComponent.currentUser = undefined;
    this.showView('start');
  }
}
