import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-frontend';

  isLoginOpen = false;

  showLogin() {
    this.isLoginOpen = true;
  }

  hideLogin() {
    this.isLoginOpen = false;
  }
}
