import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userSvc: UsersService, private router: Router) { }
tempuser = {
  username: '',
  password: ''
};

flag = 0;
users = this.userSvc.getAllUsers();
  ngOnInit() {
    localStorage.setItem('isLogin', 'false');
  }
  changePassword(): any {
    this.users.forEach(user => {
      if (user.username === this.tempuser.username && user.password === this.tempuser.password) {
        alert('Login Successful');
        localStorage.setItem('isLogin', 'true');
        this.router.navigateByUrl('../change-password');
      }
    });
    if (localStorage.getItem('isLogin') === 'false') {
      alert('Login Failed');
      this.router.navigateByUrl('../login');
    }
  };

}
