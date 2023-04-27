import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserInfo} from "../entities/user-info";
import {UserService} from "../services/user.service";
import {User} from "../entities/user";
import {catchError} from "rxjs";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  users: User[]= [];
  selectedUser!: User;
  password!: string;
  hide = true;

  @Output()
  onCloseLogin = new EventEmitter();

  @Output()
  onSuccessfulLogin =  new EventEmitter<UserInfo>();

  constructor(private userService: UserService) {
  }

  cancelLogin() {
    this.onCloseLogin.emit();
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        res => (this.users = res),
        error => (alert(JSON.stringify(JSON.stringify(error))))
      )
  }

  onLogin() {
  console.log(this.selectedUser)
    if (this.selectedUser && this.password) {
      if (this.selectedUser.role === 'moderator' && this.password === 'admin') {
        this.onSuccessfulLogin.emit(new UserInfo(this.selectedUser.username, this.selectedUser.role));
        this.onCloseLogin.emit();
      } else if (this.selectedUser.role !== 'moderator' && this.password === '123') {
        this.onSuccessfulLogin.emit(new UserInfo(this.selectedUser.username, this.selectedUser.role));
        this.onCloseLogin.emit();
      }
    } else {
      alert('Bitte Benutzername und Passwort eingeben!');
    }
  }
}
