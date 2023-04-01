import {Component, EventEmitter, Output} from '@angular/core';

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

  cancelLogin() {
    this.onCloseLogin.emit();
  }

  onLogin() {
    if (this.selectedUser && this.password) {
      if (this.selectedUser === 'Moderator' && this.password === 'admin') {
        console.log('Login erfolgreich!');
        // Hier könnte man den Benutzer zur nächsten Seite weiterleiten oder eine andere Aktion ausführen
      } else {
        console.log('Benutzername oder Passwort falsch!');
        // Hier könnte man eine Fehlermeldung anzeigen oder andere Aktionen ausführen
      }
    } else {
      console.log('Bitte Benutzername und Passwort eingeben!');
      // Hier könnte man eine Fehlermeldung anzeigen oder andere Aktionen ausführen
    }
  }
}
