import { AppModule } from './../../../day3/TFLStore/src/app/app.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
users = '[]';
  constructor() {
    localStorage.setItem('users', this.users);
    localStorage.setItem('isLogin', 'false');
    this.users = localStorage.getItem('users');
   }


  public getAllUsers() {

    if (typeof(Storage) !== 'undefined') {
      this.users = JSON.parse(localStorage.getItem('users'));
    }

    return JSON.parse(localStorage.getItem('users'));
  }

}
