
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user = {
  username: '',
  password: ''
};
tempuser = {
  username: '',
  password: '',
  cpassword : ''
};
  constructor(public userSvc: UsersService) { }
users = this.userSvc.getAllUsers();
  ngOnInit() {
  }

  onRegisterClick(): any {
    if (this.tempuser.password === this.tempuser.cpassword) {
      this.user.username = this.tempuser.username;
      this.user.password = this.tempuser.password;
      this.users.push(this.user);
      localStorage.setItem('users', JSON.stringify(this.users));
      alert("User added to the database !!!!");
    }else {
      alert("Passwords do not match !!!!");
    }
  }

}
