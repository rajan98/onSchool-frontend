import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';
import { CourseService } from '../service/course.service';
import { Course } from '../shared/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Course[];

  headerData: Head[];

  constructor(private courseService: CourseService) {
    this.courses = courseService.getCourses();
   }

  ngOnInit(): void {
    this.headerData = [
      {
       link: "/home",
       name: "Home",
       selected: false
     },
     {
      link: "#",
       name: "Explore Courses",
       selected: true
     },
     {
      link: "/contact",
       name: "Contact",
       selected: false
     }
   ];
  }

}
