import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.scss']
})
export class LoginBarComponent {
  isMenuOpen = false;

  @Output()
  onOpenLogin = new EventEmitter();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openLogin(){
  this.onOpenLogin.emit();
  }
}
