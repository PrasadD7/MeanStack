import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cart = [];
  title = 'TFLStore';
  company = 'TransFlower Pvt. Ltd.';
  person = {
    id: 101,
    FirstName: "Prasad",
    LastName: "Deshkar",
    Email: "prasaddeshkar7@gmail.com",
    Contact: "9885212141",
    Address: "",
    City: "Nagpur"
  }
  flowers = [{
    name: "Sunflower",
    price: 25,
    quantity: 2500
  },
  {
    name: "Rose",
    price: 25,
    quantity: 1500
  },
  {
    name: "Hibiscus",
    price: 25,
    quantity: 600
  },
  {
    name: "Lotus",
    price: 25,
    quantity: 9800
  }];

  constructor() {
    console.log("Inside CTOR");
  }

  onControlChange(): any {
    console.log("Display invoked");
  }
  addItem(item): any {
    this.cart.push(item);
  }

}
