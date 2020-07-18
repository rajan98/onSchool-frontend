import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  headerData: Head[];

  constructor() { }

  ngOnInit(): void {
    this.headerData = [
      {
       link: "#",
       name: "Home",
       selected: true
     },
     {
      link: "#",
       name: "Explore Courses",
       selected: false
     },
     {
      link: "#",
       name: "Contact",
       selected: false
     },
     {
      link: "#",
       name: "Login",
       selected: false
     },
     {
      link: "#",
       name: "Register",
       selected: false
     }
   ];
  }

}
