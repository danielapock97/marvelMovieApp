import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "./entities/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-frontend';

  public static currentUser: User | undefined = undefined;

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

  setUser(user: User) {
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
