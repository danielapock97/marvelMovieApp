import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.scss']
})
export class LoginBarComponent {
  users: string[] = ['Lara', 'Dani', 'Resh', 'Erek', 'Moderator'];
  selectedUser: string = '';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }

  login() {
    if (this.selectedUser !== '') {
      // Hier kannst du deine Login-Logik implementieren, z.B. eine HTTP-Anfrage an deinen Backend-Server senden
      console.log(`Benutzer ${this.selectedUser} angemeldet.`);
    }
  }
}
