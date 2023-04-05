import {Component, EventEmitter, Output} from '@angular/core';
import {UserInfo} from "../entities/user-info";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  users = ['Lara', 'Dani', 'Resh', 'Erek', 'Moderator'];
  selectedUser!: string;
  password!: string;
  hide = true;

  @Output()
  onCloseLogin = new EventEmitter();

  @Output()
  onSuccessfulLogin =  new EventEmitter<UserInfo>();

  cancelLogin() {
    this.onCloseLogin.emit();
  }

  onLogin() {
    if (this.selectedUser && this.password) {
      if (this.selectedUser === 'Moderator' && this.password === 'admin') {
        this.onSuccessfulLogin.emit(new UserInfo(this.selectedUser, 'admin'));
        this.onCloseLogin.emit();
      } else if (this.selectedUser !== 'Moderator' && this.password === '123') {
        this.onSuccessfulLogin.emit(new UserInfo(this.selectedUser, 'user'));
        this.onCloseLogin.emit();
      }
    } else {
      console.log('Bitte Benutzername und Passwort eingeben!');
      // Hier könnte man eine Fehlermeldung anzeigen oder andere Aktionen ausführen
    }
  }
}
