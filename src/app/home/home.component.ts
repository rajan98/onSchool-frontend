import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username = '';
  password = '';

  headerData: Head[];

  constructor(public router: Router) { }

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
    console.log(this.username + this.password);
    if(this.username.length == 0){
      alert("Please Enter Username");
    } else if (this.password.length == 0){
      alert("Please Enter Password");
    } else if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(['teacher']);
    } else {
      alert("Username/Password is incorrect");
    }
  }

}
