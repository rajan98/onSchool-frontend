import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../shared/course';
import { CourseService } from '../service/course.service';

import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit 
{
  headerData: Head[]= [
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
  course: Course;


  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
   let id = this.route.snapshot.params['id'];
   this.course = this.courseService.getCourse(id);
  }

  getVideoURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.course.courseUrl);
  }

}