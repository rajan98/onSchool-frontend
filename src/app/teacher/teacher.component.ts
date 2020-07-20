import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  headerData: Head[];

  constructor() { }

  ngOnInit(): void {
    this.headerData = [
     {
      link: "/home",
       name: "logout",
       selected: false
     }
   ];
  }

}
