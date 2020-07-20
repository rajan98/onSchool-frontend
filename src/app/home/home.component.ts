import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username='';
  password='';

  headerData: Head[];

  constructor() { }

  ngOnInit(): void {
    this.headerData = [
      {
       link: "/home",
       name: "Home",
       selected: true
     },
     {
      link: "/courselist",
       name: "Explore Courses",
       selected: false
     },
     {
      link: "/contact",
       name: "Contact",
       selected: false
     }
   ];
  }

  loginFunction() {
    alert("login");
  }

}
