import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {UserInfo} from "../entities/user-info";

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.scss']
})
export class LoginBarComponent {
  isMenuOpen = false;

  @Input()
  currentUser: UserInfo | undefined = undefined;

  @Output()
  onOpenLogin = new EventEmitter();

  @Output()
  onLogout = new EventEmitter();

  @Output()
  onSwitchView = new EventEmitter<string>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  switchView(view: string) {
    this.onSwitchView.emit(view);
  }

  openLogin(){
  this.onOpenLogin.emit();
  }

  logoutUser() {
    this.onLogout.emit();
  }
}
