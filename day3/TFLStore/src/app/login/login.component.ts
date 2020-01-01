
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email="Some Email";
  password="Some Password";
  constructor() {
    console.log("ctor invoked");
}

  ngOnInit() {
    console.log("onInit invoked");

  }
  onClick():any{
    if (this.email == 'prasaddeshkar7@gmail.com' && this.password=='123') {
      alert("Logged in as "+email);
    } else {
      alert("Login failed ");
    }
  }

}
