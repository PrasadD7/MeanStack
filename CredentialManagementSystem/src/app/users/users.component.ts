import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public usersSvc: UsersService) { }

 users = this.usersSvc.getAllUsers();

  ngOnInit() {
  }
  

}
