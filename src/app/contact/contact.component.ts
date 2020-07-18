import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
       selected: true
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
